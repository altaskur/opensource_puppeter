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

  return result;
};

export default getMeetUpEvents;
