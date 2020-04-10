import React, { useEffect } from "react";
import Projects from "./Projects"
import { connect } from "react-redux";

import { fetchProjects } from "../actions";

const ProjectList = props => {

    useEffect(() => {
        props.fetchProjects()
    }, [props])

    return (
        <div>
            <h1 className="title">Projects Showcase</h1>
            <div className = "card-container">
                {props.projects.map(project => (
                    <Projects project={project}/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        projects: state.projects,
        isFetching: state.isFetching,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps, 
    { fetchProjects }
)(ProjectList);