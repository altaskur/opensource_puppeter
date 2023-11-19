const getBilboEvent = async (page) => {
  const result = await page.evaluate((el) => {
    const elements = document.querySelectorAll(el);
    return elements[0].textContent;
  }, 'p.lead');

  return result;
};

export default getBilboEvent;
