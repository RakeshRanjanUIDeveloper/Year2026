export const fakeFoodFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === 'https://example.com/api/menu') {
                resolve({
                    status: 200,
                    message: 'Success',
                    data: {
                        menu: [{
                                id: 1,
                                name: 'Margherita Pizza',
                                description: 'Fresh mozzarella, tomato sauce, and basil.',
                                price: 12.99,
                                image: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg',
                                is_vegetarian: true,
                                is_spicy: false,
                                delivery_time: 30,
                            },
                            {
                                id: 2,
                                name: 'Pepperoni Pizza',
                                price: 14.99,
                                description: 'Pepperoni, mozzarella, and tomato sauce.',
                                image: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/classic-chicken-pepperoni-&-onion-pan-personal.5028b2f08415a5c9ac51c33c872a316d.1.jpg',
                                is_vegetarian: false,
                                is_spicy: true,
                                delivery_time: 35,
                            },
                            {
                                id: 3,
                                name: 'Pesto Pasta',
                                price: 10.99,
                                description: 'Penne pasta with homemade pesto sauce.',
                                image: 'https://richanddelish.com/wp-content/uploads/2023/02/creamy-pesto-pasta-9-of-15.jpg',
                                is_vegetarian: true,
                                is_spicy: false,
                                delivery_time: 25,
                            },
                            {
                                id: 4,
                                name: 'Chicken Alfredo',
                                price: 13.99,
                                description: 'Fettuccine pasta with creamy Alfredo sauce and grilled chicken.',
                                image: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_1460/k/archive/430ec9cc328b3bfdb1a3f2345a053da676b2b630',
                                is_vegetarian: false,
                                is_spicy: false,
                                delivery_time: 40,
                            },
                            {
                                id: 5,
                                name: 'Tiramisu',
                                price: 6.99,
                                description: 'Classic Italian dessert with ladyfingers, espresso, and mascarpone cre',
                                image: 'https://littlesunnykitchen.com/wp-content/uploads/2021/01/Easy-Tiramisu-Recipe-2.jpg',
                                is_vegetarian: true,
                                is_spicy: false,
                                delivery_time: 15,
                            },
                        ],
                    },
                })
            } else {
                reject({
                    status: 404,
                    message: 'Food list not found.',
                })
            }
        }, 2000)
    })
}