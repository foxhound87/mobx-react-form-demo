export default {
    fields: [
        'products[]',
        'products[].name',
        'products[].price',
        'products[].quantity',
        'products[].total',
        'products[].selected'
    ],
    values: {
        products: [{
            name: 'Product 1',
            price: 0,
            quantity: 0,
            total: 0,
            selected: false
        }, {
            name: 'Product 2',
            price: 0,
            quantity: 0,
            total: 0,
            selected: false
        }, {
            name: 'Product 3',
            price: 0,
            quantity: 0,
            total: 0,
            selected: false
        }, {
            name: 'Product 4',
            price: 0,
            quantity: 0,
            total: 0,
            selected: false
        }, {
            name: 'Product 5',
            price: 0,
            quantity: 0,
            total: 0,
            selected: false
        }, {
            name: 'Product 6',
            price: 0,
            quantity: 0,
            total: 0,
            selected: false
        }]
    },
    hooks: {
        products: {
            onSubmit(field) {
                console.log("field submitted!");
                console.log(JSON.stringify(field.values(), null, 2))
            }
        }
    }
}