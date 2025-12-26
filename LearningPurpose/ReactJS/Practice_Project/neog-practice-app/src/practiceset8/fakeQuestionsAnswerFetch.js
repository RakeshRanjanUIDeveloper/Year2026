export const fakeQuestionsAnswerFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === 'https://example.com/api/questions') {
                resolve({
                    status: 200,
                    message: 'Success',
                    data: {
                        questions: [
                            {
                                id: 1,
                                question: 'What is the difference between null and undefined in JavaScript?',
                                answer: 'Null means a variable has been declared but has no value. Undefined me'
                            },
                            {
                                id: 2,
                                question: 'What is the difference between let and var in JavaScript?',
                                answer: 'Let is block-scoped and var is function-scoped. Variables declared with'
                            },
                            {
                                id: 3,
                                question: 'What is an arrow function in JavaScript?',
                                answer: "An arrow function is a concise way to write a function in JavaScript"
                            },
                        ],
                    },
                })
            } else {
                reject({
                    status: 404,
                    message: 'Questions not found.',
                })
            }
        }, 2000)
    })
}
export default fakeQuestionsAnswerFetch