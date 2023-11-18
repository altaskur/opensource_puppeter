/* eslint-disable import/extensions */
import sites from './bd/sites.js';

const getMeetUpEvents = async (browser) => {
  const page = await browser.newPage();
  await page.goto(sites.meetUp.url);
  await page.setViewport({ width: 1080, height: 1024 });
  console.log('searching into:', page.url());

  // Get the element with evaluate and return
  // all the found elements
  const result = await page.evaluate((el) => {
    const elements = document.querySelectorAll(el);

    const events = [];
    elements.forEach((element) => {
      const event = {
        dateTime: element.querySelector('time').textContent,
        title: element.querySelector('h2').textContent,
        hostName: element.querySelector('p.line-clamp-1').textContent.split(':')[1].trim(),
      };
      events.push(event);
    });

    return events;
  }, '[data-recommendationid]');

  await page.close();
  return result;
};

export default getMeetUpEvents;
