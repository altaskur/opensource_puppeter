import { createNewEvent } from './utils/utils.js';

const getPulpConEvent = async (page) => {
  const result = await page.evaluate((el) => {
    const elements = document.querySelectorAll(el);
    const rawData = elements[0].textContent;
    return rawData;
  }, 'head > title');
  return createNewEvent({ title: 'pulpoconf', eventDate: result }, { name: 'pulpoConf', page: page.url(), type: 'PulpoConf' });
};

export default getPulpConEvent;
