const searchNewPage = async (browser, url, getDataFunction) => {
  try {
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1080, height: 1024 });
    console.log('searching into:', page.url());

    // here the function
    let result = [];

    result = await getDataFunction(page);

    await page.close();
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default searchNewPage;
