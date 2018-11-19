import { Browser, Page, launch } from 'puppeteer';

const isDebugging = () => {
    const debugging_mode = {
        headless: false,
        slowMo: 250,
        devtools: true,
    }
    return process.env.NODE_ENV === 'debug' ? debugging_mode : {};
};

let browser: Browser;
let page: Page;
beforeAll(async () => {
    browser = await launch(isDebugging());
    page = await browser.newPage();
    await page.goto('http://localhost:8080/#/');
    page.setViewport({width: 758, height: 2400});
});

describe('load home page', () => {
    test('should display title on home page', async () => {
        await page.waitForSelector('[data-testid="home-title"]');
        const title = await page.$eval<string>('[data-testid="home-title"]', title => title.innerHTML);
        expect(title).toEqual('Home');
    }, 16000);
});

afterAll(async () => {
    if (isDebugging()) {
        browser.close();
    }
});
