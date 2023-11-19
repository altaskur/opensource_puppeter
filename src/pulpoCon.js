const getPulpConEvent = async (page) => {
  const result = await page.evaluate((el) => {
    const elements = document.querySelectorAll(el);
    const rawData = elements[0].textContent;

    console.log(rawData);
  }, 'head > title');
  return result;
};

export default getPulpConEvent;
