import React, { useState, useEffect } from "react";

import firebase from '../firebase.js'
// import Projects from "./Projects"
// import { connect } from "react-redux";

// import { fetchProjects } from "../actions";

// const ProjectList = props => {

//     useEffect(() => {
//         props.fetchProjects()
//     }, [props])

//     return (
//         <div>
//             <h1 className="title">Projects Showcase</h1>
//             <div className = "card-container">
//                 {props.projects.map(project => (
//                     <Projects project={project}/>
//                 ))}
//             </div>
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         projects: state.projects,
//         isFetching: state.isFetching,
//         errors: state.errors
//     }
// }

// export default connect(
//     mapStateToProps, 
//     { fetchProjects }
// )(ProjectList);

function Portfolio(){
    const [projects, setProjects] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('Portfolio')
            .onSnapshot((snapshot) => {
                const newProjects = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setProjects(newProjects)
            })
    }, [])

    return projects
}

const ProjectList = () => {
    const projects = Portfolio()

    return (
        <div>
            <h1 className="title">Projects Showcase</h1>
            <div>
                {projects.map((project) => 
                    <div key={project.Projects}>
                    <h3>{project.Title}</h3>
                    <p>{project.Description}</p>
                    <h4>{project.Skills}</h4>
                    <a href={project.GitHub}>GitHub Link</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectList