/* eslint-disable import/extensions */
import sites from './bd/sites.js';

const getPulpConEvent = async (browser) => {
  const page = await browser.newPage();
  await page.goto(sites.pulpoCon.url);
  await page.setViewport({ width: 1080, height: 1024 });
  console.log('searching into:', page.url());

  // Get the element with evaluate and return
  // all the found elements
  const result = await page.evaluate((el) => {
    const elements = document.querySelectorAll(el);
    return elements[0].textContent;
  }, 'head > title');
  await page.close();
  return result;
};

export default getPulpConEvent;
