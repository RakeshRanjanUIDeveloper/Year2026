export const fakeBookFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === 'https://example.com/api/books') {
                resolve({
                    status: 200,
                    message: 'Success',
                    data: {
                        books: [{
                                id: 1,
                                title: 'Rewire Your Anxious Brain',
                                author: 'Nick Trenton',
                                publisher: 'HarperCollins',
                                year: 1960,
                                image: 'https://m.media-amazon.com/images/I/41a4WQdhrdL._SY445_SX342_PQ10_.jpg',
                                price: 9.99,
                                read: false,
                            },
                            {
                                id: 2,
                                title: '1984',
                                author: 'George Orwell',
                                publisher: 'Penguin Books',
                                year: 1949,
                                image: 'https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg',
                                price: 8.99,
                                read: true,
                            },
                            {
                                id: 3,
                                title: 'The Power of Your Subconscious Mind',
                                author: 'Joseph Murphy',
                                publisher: 'Little, Brown and Company',
                                year: 1951,
                                image: 'https://m.media-amazon.com/images/I/51QnuLIY2uL._SY445_SX342_PQ10_.jpg',
                                price: 10.99,
                                read: false,
                            },
                            {
                                id: 4,
                                title: 'The Great Gatsby',
                                author: 'F. Scott Fitzgerald',
                                publisher: 'Scribner',
                                year: 1925,
                                image: 'https://m.media-amazon.com/images/I/71FTb9X6wsL.jpg',
                                price: 7.99,
                                read: true,
                            },
                            {
                                id: 5,
                                title: 'Brave New World',
                                author: 'Aldous Huxley',
                                publisher: 'Harper Perennial Modern Classics',
                                year: 1932,
                                image: 'https://pagdandi.org/wp-content/uploads/2021/04/Brave-New-World.jpg',
                                price: 12.99,
                                read: false,
                            },
                            {
                                id: 6,
                                title: 'Pride and Prejudice',
                                author: 'Jane Austen',
                                publisher: 'Penguin Classics',
                                year: 1813,
                                image: 'https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg',
                                price: 6.99,
                                read: true,
                            },
                        ],
                        user: {
                            name: 'Rakesh',
                            bio: '25 din mein paisa double',
                            img: 'https://avatars.githubusercontent.com/u/24638176?v=4',
                        },
                    },
                })
            } else {
                reject({
                    status: 404,
                    message: 'Books list not found.',
                })
            }
        }, 2000)
    })
}