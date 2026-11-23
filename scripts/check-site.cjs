'use strict';
/**
 * Static GroundSurf Studio site smoke tests.
 *
 * Usage: NODE_PATH=/path/to/node_modules PLAYWRIGHT_CHROME_EXECUTABLE=/path/to/chrome \
 *        GROUNDSURF_SITE_BASE=http://localhost:4183 node scripts/check-site.cjs
 * Also works with the GitHub Pages URL (pass GROUNDSURF_SITE_BASE).
 *
 * NO external runtime dependencies in the website: Playwright is a dev QA tool.
 */
const assert=require('node:assert/strict');
const crypto=require('node:crypto');
const fs=require('node:fs');
const {chromium}=require('playwright-core');
const EXPECTED_SHA='ae0208957e6c548a4c96446b4abedaaeb3ecc2dca12380bea53b1352170723e1';
(async()=>{
 const base=(process.env.GROUNDSURF_SITE_BASE||'http://127.0.0.1:4183/').replace(/\/?$/,'/');
 const browser=await chromium.launch({
  headless:true,executablePath:process.env.PLAYWRIGHT_CHROME_EXECUTABLE,
  args:['--no-sandbox','--enable-webgl','--use-gl=angle','--use-angle=swiftshader']});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:940},acceptDownloads:true});
  page.setDefaultTimeout(15000);
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  let response=await page.goto(base,{waitUntil:'domcontentloaded'});
  assert.equal(response?.status(),200);
  await page.getByRole('heading',{name:'A clearer way to see beneath the surface.'}).waitFor();
  assert.equal(await page.getByRole('link',{name:/Open Studio/}).count()>=2,true);
  assert.equal(await page.getByRole('link',{name:/Download offline/}).count()>=1,true);
  assert.match(await page.locator('body').innerText(),/PUBLIC BETA/);
  assert.match(await page.locator('body').innerText(),/not certified/i);
  if(process.env.GROUNDSURF_SITE_SCREENSHOT)
   await page.screenshot({path:process.env.GROUNDSURF_SITE_SCREENSHOT,fullPage:true,animations:'disabled'});
  console.log('BETA_LANDING_PAGE_LOADS_WITH_ACCESSIBLE_LAUNCH_AND_NO_MISLEADING_APPROVAL_PASS');
  for(const path of ['guide/','privacy/','assets/site.css','assets/icon.svg','assets/thickness-preview.png','assets/hero-surfaces.png','assets/section-preview.png']){
   const r=await page.request.get(base+path);
   assert.equal(r.status(),200,'Missing public asset '+path);
  }
  await page.goto(base+'guide/');
  await page.getByRole('heading',{name:'Start with the evidence.'}).waitFor();
  await page.goto(base+'privacy/');
  await page.getByRole('heading',{name:'Privacy and your geological data.'}).waitFor();
  console.log('GETTING_STARTED_AND_PRIVACY_AND_LOCAL_ASSETS_LOAD_PASS');
  // The two URLs must preserve the audited, exact offline bundle bytes.
  const [online,offline]=await Promise.all([
    page.request.get(base+'app/'),
    page.request.get(base+'download/GroundSurf-Studio-0.7.5-beta.html'),
  ]);
  assert.equal(online.status(),200);
  assert.equal(offline.status(),200);
  for(const [name,response] of [['launched',online],['download',offline]]){
   const bytes=await response.body();
   const hash=crypto.createHash('sha256').update(bytes).digest('hex');
   assert.equal(bytes.byteLength,1164341);
   assert.equal(hash,EXPECTED_SHA,name+' beta bundle altered');
   assert.match(bytes.toString('utf8',0,800),/connect-src 'none'/);
  }
  console.log('PUBLIC_LAUNCH_AND_OFFLINE_DOWNLOAD_IDENTICAL_AUDITED_BUNDLE_PASS');
  await page.goto(base+'app/',{waitUntil:'load'});
  await page.getByRole('button',{name:'Explore real Stockholm logs · CC0'}).waitFor();
  await page.getByRole('button',{name:'Explore real Stockholm logs · CC0'}).click();
  await page.getByRole('region',{name:'Observed borehole interval 3D workspace'}).locator('canvas').waitFor();
  assert.match(await page.locator('body').innerText(),/14 observed|14 boreholes|14 source boreholes|Stockholm/i);
  console.log('PUBLIC_HOSTED_STUDIO_ACTUALLY_RUNS_AND_LOADS_REAL_STOCKHOLM_LOGS_PASS');
  const mobile=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1});
  await mobile.goto(base);
  await mobile.getByRole('heading',{name:'A clearer way to see beneath the surface.'}).waitFor();
  assert.equal(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),true,
   'Mobile website has unwanted horizontal overflow');
  if(process.env.GROUNDSURF_MOBILE_SCREENSHOT)
   await mobile.screenshot({path:process.env.GROUNDSURF_MOBILE_SCREENSHOT,fullPage:true,animations:'disabled'});
  console.log('RESPONSIVE_390PX_MOBILE_WEBSITE_HAS_NO_HORIZONTAL_OVERFLOW_PASS');
  assert.deepEqual(errors,[]);
  console.log('GROUNDSURF_PUBLIC_BETA_WEBSITE_BROWSER_QA_PASS');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
