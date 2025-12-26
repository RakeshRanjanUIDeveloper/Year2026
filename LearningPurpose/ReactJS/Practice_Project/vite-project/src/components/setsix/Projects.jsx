import React, { useEffect, useState } from 'react'
import { fakeProjectsFetch } from './fakeProjectsFetch';

const Projects = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    const fetchProjectData  = async () => {
        try{
            const response = await fakeProjectsFetch('https://example.com/api/projects');
            setAllProjects(response.data.projects);
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProjectData();
    }, [])

    const handleDetails = (pName) =>{
        console.log(pName)
        setSelectedProject((prev) => (prev === pName ? null : pName))
    }
  return (
    <React.Fragment>
        <h2>Projects</h2>
        <div className='project-container'>
            {
                allProjects.map((p) => (
                    <div className='project'>
                        <p><b>Name : </b>{p.title}</p>
                        <p><b>Description : </b> {p.description}</p>
                        {selectedProject === p.title && (
                                <div className='details'>
                                    <p><b>Technologies</b> {
                                        p.technologies.map((t) => t)
                                    }</p>
                                </div>
                            )
                        }
                        <p><b>Completed:</b> {p.completed ? 'Yes' : 'No'}</p>
                        <button onClick={() => handleDetails(p.title)}>{selectedProject === p.title  ? 'Hide Details' : 'Show Details'}</button>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default Projects