import React, { useEffect, useState } from 'react';
import { fakeTrackerFetch } from './fakeTrackerFetch';

const Tracker = () => {
    const [trackerData, setTrackerData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isArchivedView, setIsArchivedView] = useState(false); 

    const fetchTrackerData = async () => {
        try {
            const response = await fakeTrackerFetch('https://example.com/api/habits');
            setTrackerData(response.data.habits);
            setFilteredData(response.data.habits.filter((t) => !t.archived)); 
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTrackerData();
    }, []);

    const handleToggleArchive = () => {
        if (isArchivedView) {
            setFilteredData(trackerData.filter((t) => !t.archived)); 
        } else {
            setFilteredData(trackerData.filter((t) => t.archived)); 
        }
        setIsArchivedView(!isArchivedView); 
    };

    return (
        <React.Fragment>
            <h2>{isArchivedView ? 'Archived' : 'Unarchived'}</h2>
            {filteredData.map((t, index) => (
                <div key={index}>
                    <h2>{t.title}</h2>
                    <p>{t.desc}</p>
                    <p>Days Followed: {t.daysFollowed}</p>
                    <p>Days Skipped: {t.daysSkipped}</p>
                </div>
            ))}
            <button onClick={handleToggleArchive}>
                {isArchivedView ? 'Show Unarchived' : 'Show Archive'}
            </button>
        </React.Fragment>
    );
};

export default Tracker;
