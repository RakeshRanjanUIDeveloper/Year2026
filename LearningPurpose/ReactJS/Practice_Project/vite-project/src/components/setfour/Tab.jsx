import React, { useState } from "react";

const Tab = () => {
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
  const tabNames = Object.keys(characters);
  const [selectedTab, setSelectedTab] = useState(tabNames[0]);
  return (
    <React.Fragment>
        <div className="tab-container">
           {tabNames.map((tab, index)=>(
            <div className={selectedTab === tab ? "tab active-tab" : "tab"} key={index} onClick={() => setSelectedTab(tab)}>Show {tab}</div>
           ))}
        </div>
        <div className="tab-contents">
           {
            characters[selectedTab].map((c) => (
              <div key={c.name} className="tab-content">
                  <h3>Name : {c.name}</h3>
                  <p>Powers : {c.powers}</p>
                  <p>Costume : {c.costume}</p>
              </div>
            ))
           }
        </div>
    </React.Fragment>
  )
};

export default Tab;
