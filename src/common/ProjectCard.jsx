function ProjectCard({ src, link, projectTitle, projectDesc }) {
    const projectImg = { src } + '.png';

    return (
        <div>
            <img src={projectImg}></img>
            <a href={link} target="_blank">
                <img
                    className="projectImg"
                    src={src}
                    alt={`${projectTitle} project image`}
                />
                <h3>{projectTitle}</h3>
                <p>{projectDesc}</p>
            </a>
        </div>
    );
}

export default ProjectCard;
