    carts = [
        { _id: 2, products: [] },
        { _id: 1, products: [
            {id: 22, quantity: 6},
            {id: 33, quantity: 1},
        ] },
    ]

PUT /api/carts/1
body: [{id: 44, quantity: 45}]
result:

    carts = [
        { _id: 2, products: [] },
        { _id: 1, products: [{id: 44, quantity: 45}] },
    ]