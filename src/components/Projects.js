import React from 'react';

const Projects = props => {
    return (
        <div>
            <h2>{props.project.title}</h2>
            <div>
                <img src={props.project.image} alt="coding representation"></img>
            </div>
            <p>{props.project.description}</p>
            <h4>{props.project.skills}</h4>
            <h5><a href={props.project.link}>GitHub Link</a></h5>
        </div>
    )
}

export default Projects;