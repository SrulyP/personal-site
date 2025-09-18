function ProjectCard({ src, link, projectTitle, projectDesc }) {
    return (
        <div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                    className="projectImg"
                    src={src}
                    alt={`${projectTitle} project image`}
                />
            </a>
            <div>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {projectTitle}
                </a>
                <p>{projectDesc}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
