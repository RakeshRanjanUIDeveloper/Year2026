import React, { useEffect, useState } from 'react'
import { fakeProjectFetch } from './fakeProjectFetch'

const Projects = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [showDetails, setShowDetails] = useState([]);
    useEffect(() =>{
        const fetchProjectsData = async () =>{
            try {
                const response = await fakeProjectFetch('https://example.com/api/projects');
                if(response.status === 200){
                    setAllProjects(response.data.projects)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchProjectsData();
    }, []);
    const handleDetails = (title) =>{
       console.log(!showDetails.includes(title))
       if(!showDetails.includes(title)){
            setShowDetails((prev) => [...prev, title])
       }

    }
  return (
    <React.Fragment>
        {
            allProjects.map((project) => (
                <div className='project'>
                    <p><b>Title : </b>{project.title}</p>
                    <p><b>Description : </b>{project.description}</p>
                    {showDetails.includes(project.title) && (
                            <div className='details'>
                                <h2>Technologies : {project.technologies.toString()}</h2>
                                <h2>Completed: {project.completed.toString()}</h2>
                            </div>
                        )
                    }
                    <button onClick={ () => handleDetails(project.title)}>Show Details</button>
                </div>
            ))
        }
    </React.Fragment>
  )
}

export default Projects