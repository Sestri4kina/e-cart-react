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
    }, 5000);

    test('should display header with 2 links', async () => {
        await page.waitForSelector('[data-testid="nav-li"]');
        const navs = await page.$$eval<number>('[data-testid="nav-li"]', link => link.length);
        expect(navs).toEqual(2);
    }, 16000);

    test('should display 3 products', async () => {
        await page.waitForSelector('[data-testid="product-item"]');
        const products = await page.$$eval<number>('[data-testid="product-item"]', item => item.length);
        expect(products).toEqual(3);
    }, 5000);

    test('product card should display image, name, price and button', async () => {
        await page.waitForSelector('[data-testid="product-item"]');
        const imageHTML = '<img class="img" src="https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/7bd5eb9b-3f10-4354-9629-776714852453/dd7c2f1b-df77-4673-9c30-cc414f9afa34.png">';
        const image = await page.$eval('[data-testid="product-img"]', e => e.innerHTML);
        const name = await page.$eval('[data-testid="product-name"]', e => e.innerHTML);
        const price = await page.$eval('[data-testid="product-price"]', e => e.innerHTML);
        const buttonText = await page.$eval('[data-testid="product-btn"]', e => e.innerHTML);
        
        expect(image).toEqual(imageHTML);
        expect(name).toEqual("iMac Pro");
        expect(price).toEqual("$4,999.00");
        expect(buttonText).toEqual("Add to cart");
    }, 5000);

    test('shoul redirect to Cart page upon click on cart nav link', async () => {
        await page.waitForSelector('a[href="#/cart"]')
        await page.click('a[href="#/cart"]')

        await page.waitForSelector('[data-testid="cart-title"]');
        const cartTitle = await page.$eval('[data-testid="cart-title"]', e => e.textContent);
    
        expect(cartTitle).toEqual('Cart');
    }, 10000);
});

afterAll(async () => {
    if (isDebugging()) {
        browser.close();
    }
});
