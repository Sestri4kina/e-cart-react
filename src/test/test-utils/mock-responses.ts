export const itemsResponse = {
    "data":[
        {
            "id":"bbde54c2-4b3e-469b-9381-c14a4a95f916",
            "type":"cart_item",
            "product_id":"612f5c56-35eb-4391-be14-19e617d38073",
            "name":"MacBook Air 13-inch",
            "description":"13.3-inch (diagonal) LED-backlit widescreen display\n1.8GHz dual-core Intel Core i5 or 2.2GHz dual-core Intel Core i7 processor\nTurbo Boost up to 3.2GHz\nUp to 12 hours battery life1\n128GB, 256GB, or 512GB SSD2\nMulti-Touch trackpad\n2.96 pounds",
            "sku":"store",
            "image":{
                "mime_type":"image/png",
                "file_name":"product_macbook_air_13_large_2x.png",
                "href":"https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/7bd5eb9b-3f10-4354-9629-776714852453/5bd6b42a-60ad-4404-9d34-d62ecddaf5ee.png"
            },
            "quantity":1,
            "manage_stock":true,
            "unit_price":{"amount":99900,"currency":"USD","includes_tax":true},
            "value":{"amount":99900,"currency":"USD","includes_tax":true},
            "links":{"product":"https://api.moltin.com/products/612f5c56-35eb-4391-be14-19e617d38073"},
            "meta":{
                "display_price":{
                    "with_tax":{
                        "unit":{"amount":99900,"currency":"USD","formatted":"$999.00"},
                        "value":{"amount":99900,"currency":"USD","formatted":"$999.00"}
                    },
                "without_tax":{
                    "unit":{"amount":99900,"currency":"USD","formatted":"$999.00"},
                    "value":{"amount":99900,"currency":"USD","formatted":"$999.00"}
                }
            },
            "timestamps":{
                "created_at":"2018-11-19T09:30:54Z",
                "updated_at":"2018-11-19T09:30:54Z"}
            }
        }
    ]
}

export const productsResponse = {
    data: [{
        commodity_type: "physical",
        description: "27-inch (diagonal) LED-backlit Retina 5K display↵3.2GHz 8-core, 3.0GHz 10-core, 2.5GHz 14-core, or 2.3GHz 18-core Intel Xeon W processor ↵Turbo Boost up to 4.5GHz↵Up to 4TB SSD2↵Space Gray Magic Keyboard with Numeric Keypad and↵Space Gray Magic Mouse 2 or↵Space Gray Magic Trackpad 2",
        id: "612f5c56-35eb-4391-be14-19e617d38073",
        manage_stock: true,
        meta: {timestamps: {created_at: "2018-03-21T12:36:06+00:00", updated_at: "2018-03-21T12:36:19+00:00"}},
        display_price: {with_tax: {amount: 499900, currency: "USD", formatted: "$4,999.00"}},
        stock: {level: 5, availability: "in-stock"},
        timestamps: {created_at: "2018-03-21T12:36:06+00:00", updated_at: "2018-03-21T12:36:19+00:00"},
        name: "iMac Pro",
        price: [{amount: 499900, currency: "USD", includes_tax: true}],
        relationships: {
            main_image: {
                data: {
                    type: "main_image", 
                    id: "dd7c2f1b-df77-4673-9c30-cc414f9afa34"
                }
            }
        },
        main_image: {data: {type: "main_image", id: "dd7c2f1b-df77-4673-9c30-cc414f9afa34"}},
        sku: "imac-pro",
        slug: "imac-pro",
        status: "live",
        type: "product"
    }],
    included: {
        main_images: [{
            id: "dd7c2f1b-df77-4673-9c30-cc414f9afa34",
            link: {
                href: "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/7bd5eb9b-3f10-4354-9629-776714852453/dd7c2f1b-df77-4673-9c30-cc414f9afa34.png"
            }
        }]
    }
}



/* 
,
        {"id":"2e56baa4-cd22-4a4c-a98b-db29e4755677","type":"cart_item",
        "product_id":"763ab947-1be9-41f5-af16-d000075f15e1","name":"MacBook Pro 15-inch",
        "description":"15.4-inch (diagonal) LED-backlit Retina display\n2.2GHz, 2.5GHz, or 2.8GHz quad-core Intel Core i7 processor\nTurbo Boost up to 4.0GHz\nUp to 9 hours battery life1\n256GB, 512GB, or 1TB SSD2\nForce Touch trackpad\n4.49 pounds",
        "sku":"store-mac-pro","image":{"mime_type":"image/png","file_name":"product_macbook_pro_2015_15_large_2x.png",
        "href":"https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/7bd5eb9b-3f10-4354-9629-776714852453/1bcb44af-fc73-4e5c-a7a9-9b81a72185db.png"},
        "quantity":4,"manage_stock":true,"unit_price":{"amount":199900,"currency":"USD","includes_tax":true},"value":{"amount":799600,"currency":"USD","includes_tax":true},
        "links":{"product":"https://api.moltin.com/products/763ab947-1be9-41f5-af16-d000075f15e1"},
        "meta":{"display_price":{"with_tax":{"unit":{"amount":199900,"currency":"USD","formatted":"$1999.00"},"value":{"amount":799600,"currency":"USD","formatted":"$7996.00"}},
        "without_tax":{"unit":{"amount":199900,"currency":"USD","formatted":"$1999.00"},"value":{"amount":799600,"currency":"USD","formatted":"$7996.00"}}},
        "timestamps":{"created_at":"2018-11-19T09:30:58Z","updated_at":"2018-11-19T16:57:17Z"}}}],"meta":{
            "display_price":{"with_tax":{"amount":899500,"currency":"USD","formatted":"$8995.00"},"without_tax":{"amount":899500,"currency":"USD","formatted":"$8995.00"}},
            "timestamps":{"created_at":"2018-11-19T09:30:54Z","updated_at":"2018-11-19T16:57:17Z"}}}
*/