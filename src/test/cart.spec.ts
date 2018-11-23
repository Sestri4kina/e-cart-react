import { Browser, Page, launch } from 'puppeteer';

const isDebugging = () => {
    const debugging_mode = {
        headless: false,
        slowMo: 500,
        devtools: true,
    }
    return process.env.NODE_ENV === 'debug' ? debugging_mode : {};
};

let browser: Browser;
let page: Page;

describe('load cart page', () => {
    jest.setTimeout(12000);
    beforeEach(async () => {
        browser = await launch(isDebugging());
        page = await browser.newPage();
        await page.goto('http://localhost:8080', { waitUntil: "domcontentloaded" });
    });

    test('should display title on cart page', async () => {
        await page.waitForSelector('[data-testid="cart-title"]');
        const title = await page.$eval<string>('[data-testid="cart-title"]', title => title.innerHTML);
        expect(title).toEqual('Cart');
    }, 6000);

    test.only('should display items in a cart', async () => {
        //find products on home page
        await page.waitForSelector('[data-testid="product-btn"]');
        const buttons = await page.$$('[data-testid="product-btn"]');
        const count = buttons.length > 2 ? 2 : buttons.length;
        
        // add product to cart
        for (let i=0; i < count; i++) {
            await buttons[i].click();
        }

        // navigate to cart page
        await page.waitForSelector('a[href="#/cart"]');
        await page.click('a[href="#/cart"]');
       
        // find cart items
        await page.waitForSelector('[data-testid="cart-item"]');
        const cartItems = await page.$$('[data-testid="cart-item"]');
    
        expect(cartItems.length).toEqual(count);
    }, 16000);

    afterEach(async () => {
        if (isDebugging()) {
            browser.close();
        }
    });
});


/* 
HOW TO MOCK REQUESTS

import * as nock from 'nock';
import { getCartItems, getProducts, getCartRef, getAccessToken } from '../app/utils';
import axios from 'axios';
import { itemsResponse, productsResponse } from './test-utils/mock-responses';

import { Product, CartItem } from '@store/models';

let products: Product[];
let cartItems: CartItem[];

const cartRef = getCartRef();
const baseEndpoint = "https://api.moltin.com";
const productsEndpoint = "/v2/products?include=main_image";
const itemsEndpoint = `/v2/carts/${cartRef}/items`;

const token = await getAccessToken();
axios.defaults.headers.common['Authorization'] = `Bearer ${token.access_token}`;
axios.defaults.adapter = require('axios/lib/adapters/http');

const moltinAPI = nock(baseEndpoint);

await moltinAPI
    .log(console.log)
    .get(productsEndpoint)
    .reply(200, productsResponse);

await moltinAPI
    .log(console.log)
    .get(itemsEndpoint)
    .reply(200, itemsResponse);
*/
