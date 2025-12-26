import React, { useEffect, useState } from "react";
import { fakeUnarchivedFetch } from "./fakeUnarchivedFetch";

const Unarchived = () => {
  const [allData, setAllData] = useState([]);
  const [showArchives, setShowArchives] = useState(false);
  useEffect(() => {
    const fetchUnarchivedData = async () => {
      try {
        const response = await fakeUnarchivedFetch(
          "https://example.com/api/habits"
        );
        setAllData(response.data.habits);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUnarchivedData();
  }, []);

  /* const handleArchives = () => {
    setShowArchives(true);
  }; */
  const filteredData =  showArchives ?  allData.filter((data) => data.archived) : allData.filter((data) => !data.archived);
  return (
    <React.Fragment>

      <h2>{showArchives ? 'Archives' : 'Unarchives'}</h2>
      <ul>
        {filteredData.map((data) => (
              <div className="each-data">
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
                <ul>
                  <li>
                    <b>Days Followed : </b>
                    {data.daysFollowed}
                  </li>
                  <li>
                    <b>Days Skipped : </b>
                    {data.daysSkipped}
                  </li>
                </ul>
              </div>
            ))
        }
      </ul>
     {/* <button onClick={handleArchives}>Show Archives</button> */}
     <button onClick={() => setShowArchives((prev) => !prev)}>
        {showArchives ? "Show Unarchives" : "Show Archives"}
      </button> 
    </React.Fragment>
  );
};

export default Unarchived;
