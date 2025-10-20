import { useState, useEffect, useRef } from 'react';

function ProjectCard({
    src,
    link,
    livePreviewLink,
    projectTitle,
    projectDesc,
    technologies,
    learnings,
}) {
    const [showLearnings, setShowLearnings] = useState(false);
    const popupRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                showLearnings && // 1. Is popup open?
                popupRef.current && // 2. Does popup exist?
                buttonRef.current && // 3. Does button exist?
                !popupRef.current.contains(event.target) && // 4. Click NOT inside popup?
                !buttonRef.current.contains(event.target) // 5. Click NOT on button?
            ) {
                setShowLearnings(false); // Close the popup
            }
        }

        if (showLearnings) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showLearnings]);

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
                <div className="projectHeader">
                    <a
                        className="projectTitle"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {projectTitle}
                    </a>
                    <button
                        ref={buttonRef}
                        className="whatILearnedBtn"
                        onClick={(e) => {
                            e.preventDefault();
                            setShowLearnings(!showLearnings);
                        }}
                    >
                        What I learned {showLearnings ? 'ᐃ' : 'ᐁ'}
                    </button>
                </div>
                <div className="projectDescWrapper">
                    <p className="projectDesc">{projectDesc}</p>
                    {showLearnings && learnings && (
                        <div ref={popupRef} className="learningsPopup">
                            {learnings}
                        </div>
                    )}
                </div>
                <div className="projectFooter">
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
        </div>
    );
}

export default ProjectCard;
