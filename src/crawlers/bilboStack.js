import { createNewEvent } from '../utils/utils.js';

const getBilboEvent = async (page) => {
  const result = await page.evaluate((el) => {
    const elements = document.querySelectorAll(el);
    return elements[0].textContent;
  }, 'p.lead');

  return createNewEvent({ title: 'bilbostack', eventDate: result }, { name: 'bilbostack', url: page.url(), type: 'BilbaoStack' });
};

export default getBilboEvent;
