/* eslint-disable import/extensions */
import puppeteer from 'puppeteer';
import getMeetUpEvents from './src/meetUp.js';
import getPulpConEvent from './src/pulpoCon.js';
import getBilboEvent from './src/bilboStack.js';
import sites from './src/bd/sites.js';
import searchNewPage from './src/newPage.js';
import parseDate from './src/utils.js';

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
  const pulpConDataParsed = {
    dateTime: parseDate(pulpConData.split('y')[1].trim()),
    title: 'PulpCon',
    hostName: 'PulpCon',
  };
  const bilboData = await searchNewPage(browser, sites.bilbostack.url, getBilboEvent);
  const bilboDataParsed = {
    dateTime: parseDate(bilboData.split(',')[0].trim()),
    title: 'BilboStack',
    hostName: 'BilboStack',
  };

  const events = [...meetUpDataParsed, pulpConDataParsed, bilboDataParsed];

  console.log(events);

  await browser.close();
})();
