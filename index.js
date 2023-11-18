/* eslint-disable import/extensions */
import puppeteer from 'puppeteer';
import getMeetUpEvents from './src/meetUp.js';
import getPulpConEvent from './src/pulpoCon.js';
import getBilboEvent from './src/bilboStack.js';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const meetUpEvents = await getMeetUpEvents(page);
  console.log(meetUpEvents);
  // const pulpConDate = await getPulpConEvent(page);
  // console.log(pulpConDate);
  // const bilbostackEvent = await getBilboEvent(page);
  // console.log(bilbostackEvent);

  await browser.close();
})();
