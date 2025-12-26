import React from "react";
import Tab from "./Tab";
import FontSizeAdjuster from "./FontSizeAdjuster";
import FoodItem from "./FoodItem";
import TodoList from "./TodoList";
import TodoList1 from "./TodoList1";
import Books from "./Books";
import Game from "./Game";

const Main = () => {
  const characters = {
    heroes: [
      {
        name: "IRON MAN",
        powers: "Genius,Rich,IRON Suit",
        costume: "IRON MAN suit",
      },
      {
        name: "ANT MAN",
        powers: "Ant man suit",
        costume: "Ant man suit",
      },
      {
        name: "Spider-man",
        powers: "Reflexes,Speed,Spider-Sense",
        costume: "Spider Suit",
      },
      {
        name: "Bat man",
        powers: "Rich,Bat suit",
        costume: "Bat Suit",
      },
      {
        name: "Super-man",
        powers: "Superhuman strength,Reflexes,Speed",
        costume: "Superman Suit",
      },
    ],
    villains: [
      {
        name: "Thanos",
        powers: "Superhuman strength,Reflexes,Speed,",
        costume: "Metal armor",
      },
      {
        name: "Venom",
        powers: "shapeshifting and camouflage Symbiotes autonomous defense",
        costume: "black suit",
      },
      {
        name: "Kang the conqueror",
        powers: "time travel, can access all tech",
        costume: "kang armor",
      },
      {
        name: "Joker",
        powers: "clownlike appearance and sick humour",
        costume: "Joker costume",
      },
    ],
  };
  const itemList = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Vegetable" },
    { id: 3, name: "Banana", category: "Fruit" },
    { id: 4, name: "Broccoli", category: "Vegetable" },
  ];

  const todoItems = [
    { id: 1, task: "Writing 1-page poem", isDone: true },
    { id: 2, task: "Gym", isDone: false },
    { id: 3, task: "Shopping", isDone: false },
    { id: 4, task: "Standup call", isDone: true },
  ];
  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
    { id: 3, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic" },
    { id: 4, title: "1984", author: "George Orwell", genre: "Dystopian" },
    { id: 5, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" },
    { id: 6, title: "The Hunger Games", author: "Suzanne Collins", genre: "Young Adult" },
    { id: 7, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre:"Young Adult"}
    ];
  return (
    <React.Fragment>
      <h1>----Rakesh Practice Set 4----</h1>
      <Tab characters={characters} />
      <FontSizeAdjuster />
      <FoodItem itemList={itemList} />
      <TodoList todoItems={todoItems} />
      <TodoList1 todoItems={todoItems} />
      <Books books={books} />
      <Game />
      <h1>----Rakesh Practice Set 4----</h1>
    </React.Fragment>
  );
};

export default Main;
