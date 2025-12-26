export const FakeTodosFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/todos") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            todos: [
              {
                title: "Go Outside : Get Some Fresh Air",
                desc: "lorem ipsum dolor sit amit",
                todos: ["shopping", "cricket", "walking"],
              },
              {
                title: "Let's Work : Deadline Closes in 3 days",
                desc: "lorem ipsum dolor sit amit",
                todos: ["Feature update", "Team Meet", "Code Walkthrough"],
              },
              {
                title: "Home Work : To Be Done on Priority",
                desc: "lorem ipsum dolor sit amit",
                todos: ["Fix tap", "Wedding function"],
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: "Todo list not found.",
        });
      }
    }, 2000);
  });
};
