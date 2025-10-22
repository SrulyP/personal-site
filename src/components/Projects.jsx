import '../App.css';
import battlefield from '../assets/battlefield.png';
import weather from '../assets/weather.png';
import todo from '../assets/todo.png';
import library from '../assets/library.png';
import thisSite from '../assets/thisSite.png';
import smallsh from '../assets/smallsh.png';
import ProjectCard from '../common/ProjectCard';
import { useTranslation } from 'react-i18next';

function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="projectsSection">
            <h2>{t('projects.title')}</h2>
            <ProjectCard
                src={thisSite}
                link="https://github.com/SrulyP/personal-site"
                projectTitle={t('projects.personalSite.title')}
                projectDesc={t('projects.personalSite.desc')}
                technologies={['React', 'Vite', 'JSX', 'i18next', 'CSS']}
                learnings={t('projects.personalSite.learnings')}
            />
            <ProjectCard
                src={smallsh}
                link="https://github.com/SrulyP/smallsh"
                projectTitle={t('projects.smallsh.title')}
                projectDesc={t('projects.smallsh.desc')}
                technologies={['C', 'Linux', 'System Programming']}
                learnings={t('projects.smallsh.learnings')}
            />
            <ProjectCard
                src={battlefield}
                link="https://github.com/SrulyP/battleship"
                projectTitle={t('projects.battlefield.title')}
                projectDesc={t('projects.battlefield.desc')}
                technologies={['JavaScript', 'HTML', 'CSS', 'Jest']}
                livePreviewLink="https://srulyp.github.io/battleship/"
                learnings={t('projects.battlefield.learnings')}
            />
            <ProjectCard
                src={weather}
                link="https://github.com/SrulyP/weather-app"
                projectTitle={t('projects.weather.title')}
                projectDesc={t('projects.weather.desc')}
                technologies={['JavaScript', 'HTML', 'CSS', 'API']}
                livePreviewLink="https://srulyp.github.io/weather-app/"
                learnings={t('projects.weather.learnings')}
            />
            <ProjectCard
                src={todo}
                link="https://github.com/SrulyP/to-do-list"
                projectTitle={t('projects.todo.title')}
                projectDesc={t('projects.todo.desc')}
                technologies={['JavaScript', 'HTML', 'CSS', 'localStorage']}
                livePreviewLink="https://srulyp.github.io/to-do-list/"
                learnings={t('projects.todo.learnings')}
            />
            <ProjectCard
                src={library}
                link="https://github.com/SrulyP/library-project"
                projectTitle={t('projects.library.title')}
                projectDesc={t('projects.library.desc')}
                technologies={['JavaScript', 'HTML', 'CSS', 'localStorage']}
                livePreviewLink="https://srulyp.github.io/library-project/"
                learnings={t('projects.library.learnings')}
            />
        </section>
    );
}

export default Projects;
