/* eslint-disable import/extensions */
import puppeteer from 'puppeteer';
import getMeetUpEvents from './src/meetUp.js';
import getPulpConEvent from './src/pulpoCon.js';
import getBilboEvent from './src/bilboStack.js';
import sites from './src/bd/sites.js';
import searchNewPage from './src/newPage.js';
import parseDate from './src/utils/index.js';
import { saveEvents } from './src/services/conferences.js';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
  });

  const meetUpData = await searchNewPage(browser, sites.meetUp.url, getMeetUpEvents);
  const meetUpDataParsed = meetUpData.map((event) => (
    { ...event, dateTime: parseDate(event.dateTime) }
  ));

  const pulpConData = await searchNewPage(browser, sites.pulpoCon.url, getPulpConEvent);
  const bilboData = await searchNewPage(browser, sites.bilbostack.url, getBilboEvent);

  const events = [...meetUpDataParsed, pulpConData, bilboData];

  saveEvents(events);

  await browser.close();
})();
