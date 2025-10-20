function ProjectCard({
    src,
    link,
    livePreviewLink,
    projectTitle,
    projectDesc,
    technologies,
}) {
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
                <a
                    className="projectTitle"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {projectTitle}
                </a>
                <p className="projectDesc">{projectDesc}</p>
                <div className="projectTechnologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="techTag">
                            {tech}
                        </span>
                    ))}
                </div>
                {livePreviewLink && (
                    <a
                        href={livePreviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="livePreviewBtn"
                    >
                        Live Preview
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
