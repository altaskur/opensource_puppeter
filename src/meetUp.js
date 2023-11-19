import { createNewEvent } from './utils/utils.js';

const getMeetUpEvents = async (page) => {
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

  return result.map((event) => createNewEvent(event, { name: 'MeetUp', url: page.url(), type: 'MeetUp' }));
};

export default getMeetUpEvents;
