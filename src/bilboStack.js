import sites from './bd/sites.js';

const getBilboEvent = async (browser) => {
  const page = await browser.newPage();
  await page.goto(sites.bilbostack.url);
  await page.setViewport({ width: 1080, height: 1024 });
  console.log('searching into:', page.url());

  const result = await page.evaluate((el) => {
    const elements = document.querySelectorAll(el);
    return elements[0].textContent;
  }, 'p.lead');

  await page.close();
  return result;
};

export default getBilboEvent;
