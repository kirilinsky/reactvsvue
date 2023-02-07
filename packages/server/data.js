const getUniqueItems = require('./getUniqueItems')
let data = [
    {
        id: '62163307-03aa-40f9-96af-8a89c4905af0',
        name: 'Jeans FIT',
        type: "jeans",
        color: 'denim',
        price: '20',
        size: 's',
        image: 'https://static.zara.net/photos///2022/I/0/2/p/8727/410/712/2/w/1126/8727410712_6_1_1.jpg?ts=1657619428038'
    },
    {
        id: '62163307-03aa-23f9-96af-8a89c4905af0',
        name: 'Jeans FIT',
        type: "jeans",
        color: 'denim',
        price: '20',
        size: 'l',
        image: 'https://static.zara.net/photos///2022/I/0/2/p/8727/410/712/2/w/1126/8727410712_6_1_1.jpg?ts=1657619428038'
    },
    {
        id: "013424f0-4ea3-451e-be32-76a1fe998d4d",
        name: 'Linen Shirt',
        color: "white",
        type: "shirt",
        size: 'm',
        price: '14',
        image: "https://static.zara.net/photos///2022/V/0/2/p/1063/407/250/2/w/1126/1063407250_6_1_1.jpg?ts=1642163706912"
    },
    {
        id: "013424f0-4ea3-451e-be32-76a1fe99812d",
        name: 'BOMBER JACKET WITH SLOGAN ',
        color: "black",
        type: "jacket",
        size: 'm',
        price: '50',
        image: "https://static.zara.net/photos///2023/V/0/2/p/8281/431/800/2/w/1126/8281431800_6_1_1.jpg?ts=1674476861933"
    },
    {
        id: "33424f0-4ea3-451e-be32-76a1fe99812d",
        name: 'STRIPED COTTON SWEATER',
        color: "white",
        type: "sweater",
        size: 's',
        price: '39',
        image: "https://static.zara.net/photos///2023/V/0/2/p/3284/449/251/2/w/1126/3284449251_6_1_1.jpg?ts=1675178352360"
    },
    {
        id: "3342430-4ea3-451e-be32-76a1fe99812d",
        name: 'TEXTURED SWEATER WITH STRIPES',
        color: "multi",
        type: "sweater",
        size: 'l',
        price: '46',
        image: "https://static.zara.net/photos///2023/V/0/2/p/3390/400/737/2/w/1126/3390400737_6_1_1.jpg?ts=1674575028986"
    }
    ,
    {
        id: "3342430-4ea3-451e-be32-76a1fe29812d",
        name: 'STRAIGHT FIT JEANS',
        color: "denim",
        type: "jeans",
        size: 's',
        price: '20',
        image: "https://static.zara.net/photos///2023/V/0/2/p/8062/405/427/2/w/1126/8062405427_6_1_1.jpg?ts=1675159046365"
    }
]



let types = getUniqueItems(data, 'type')
let colors = getUniqueItems(data, 'color')

let sizes = getUniqueItems(data, 'size')

module.exports = { data, sizes, colors, types }