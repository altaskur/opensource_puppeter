/* eslint-disable import/extensions */
import sites from './bd/sites.js';

const getBilboEvent = async (page) => {
  await page.goto(sites.bilbostack.url);
  await page.setViewport({ width: 1080, height: 1024 });
  console.log('searching into:', page.url());

  // Get the element with evaluate and return
  // all the found elements
  const result = await page.evaluate((el) => {
    const elements = document.querySelectorAll(el);
    elements.forEach((element) => {
      const event = {
        dateTime: element.querySelector('h1').textContent,
        // title: element.querySelector('p.lead').textContent,
      };
      return event;
    });
  }, 'div.container');

  return result;
};

export default getBilboEvent;
