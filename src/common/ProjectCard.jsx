function ProjectCard({ src, link, projectTitle, projectDesc, technologies }) {
    return (
        <div className="projectCard">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                    className="projectImg"
                    src={src}
                    alt={`${projectTitle} project image`}
                />
            </a>
            <div className="projectContent">
                <h3 className="projectTitle">{projectTitle}</h3>
                <p className="projectDesc">{projectDesc}</p>
                <div className="projectTechnologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="techTag">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
