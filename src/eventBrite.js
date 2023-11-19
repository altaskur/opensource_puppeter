import { createNewEvent } from './utils/utils.js';

const getEventbrite = async (page) => {
  const result = await page.evaluate((el) => {
    const elements = document.querySelectorAll(el);

    const events = [];
    elements.forEach((element) => {
      const event = {
        dateTime: element.querySelector('p').textContent,
        title: element.querySelector('h2').textContent,
      };
      events.push(event);
    });

    return events;
  }, 'section.discover-horizontal-event-card');
  const events = result.map((event) => createNewEvent(event, { name: 'Eventbrite', url: page.url(), type: 'EventBrite' }));

  return events;
};

export default getEventbrite;
