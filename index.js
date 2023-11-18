/* eslint-disable import/extensions */
import puppeteer from 'puppeteer';
import getMeetUpEvents from './src/meetUp.js';
import getPulpConEvent from './src/pulpoCon.js';
import getBilboEvent from './src/bilboStack.js';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
  });

  const meetUpEvents = await getMeetUpEvents(browser);
  console.log(meetUpEvents);
  const pulpConDate = await getPulpConEvent(browser);
  console.log(pulpConDate);
  const bilbostackEvent = await getBilboEvent(browser);
  console.log(bilbostackEvent);

  await browser.close();
})();
