import React, { useState, useEffect } from "react";

import firebase from '../firebase.js'

function Portfolio(){
    const [backendProjects, setBackendProjects] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('Portfolio')
            .onSnapshot((snapshot) => {
                const newBackendProjects = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setBackendProjects(newBackendProjects)
            })
    }, [])

    return backendProjects
}

const ProjectList = () => {
    const backendProjects = Portfolio()

    return (
        <div>
            <h1 className="title">Projects Showcase</h1>
            <div>
                <h2>Back-End Projects</h2>
                {backendProjects.map((project) => 
                    <div key={project.id}>
                    <h3>{project.Title}</h3>
                    <p>{project.Description}</p>
                    {project.Tech.map((tech) => 
                        <ul key={tech.id}>
                            <li>{tech}</li>
                        </ul>
                    )}
                    <button><a href={project.GitHub}>GitHub Link</a></button>
                    </div>
                )}
            </div>
            <div>
                    <h2>Front-End Projects</h2>
            </div>
        </div>
    )
}

export default ProjectList