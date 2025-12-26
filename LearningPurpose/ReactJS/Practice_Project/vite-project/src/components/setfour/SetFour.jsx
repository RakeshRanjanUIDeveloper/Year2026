import React from "react";
import Tab from "./Tab";
import Font from "./Font";
import Fruits from "./Fruits";
import Todo from "./Todo";
import Todos from "./Todos";
import Books from "./Books";

const SetFour = () => {
  const todoItems = [
    { id: 1, task: "Writing 1-page poem", isDone: true },
    { id: 2, task: "Gym", isDone: false },
    { id: 3, task: "Shopping", isDone: false },
    { id: 4, task: "Standup call", isDone: true },
  ];
  const todoItemss = [
    { id: 1, task: "Writing 1-page poem", isDone: false },
    { id: 2, task: "Gym", isDone: false },
    { id: 3, task: "Shopping", isDone: false },
    { id: 4, task: "Standup call", isDone: false },
  ];
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Classic",
    },
    {
      id: 3,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Classic",
    },
    { id: 4, title: "1984", author: "George Orwell", genre: "Dystopian" },
    {
      id: 5,
      title: "Brave New World",
      author: "Aldous Huxley",
      genre: "Dystopian",
    },
    {
      id: 6,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      genre: "Young Adult",
    },
    {
      id: 7,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      genre: "Young Adult",
    },
  ];
  return (
    <React.Fragment>
      <Tab />
      <Font />
      <Fruits />
      <Todo todoItems={todoItems} />
      <Todos todoItemss={todoItemss} />
      <Books books={books} />
    </React.Fragment>
  );
};

export default SetFour;
