import '../App.css';
import battlefield from '../assets/battlefield.png';
import weather from '../assets/weather.png';
import todo from '../assets/todo.png';
import library from '../assets/library.png';
import thisSite from '../assets/thisSite.png';
import ProjectCard from '../common/ProjectCard';

function Projects() {
    return (
        <section id="projects" className="projectsSection">
            <h2>My Projects</h2>
            <ProjectCard
                src={thisSite}
                link="https://github.com/SrulyP/personal-site"
                projectTitle="Personal Site"
                projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                technologies={['React', 'Vite', 'JSX', 'CSS']}
            />
            <ProjectCard
                src={battlefield}
                link="https://github.com/SrulyP/battleship"
                projectTitle="Battlefield"
                projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                technologies={['JavaScript', 'HTML', 'CSS']}
            />
            <ProjectCard
                src={weather}
                link="https://github.com/SrulyP/weather-app"
                projectTitle="Weather App"
                projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                technologies={['JavaScript', 'HTML', 'CSS', 'API']}
            />
            <ProjectCard
                src={todo}
                link="https://github.com/SrulyP/to-do-list"
                projectTitle="To-Do App"
                projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                technologies={['JavaScript', 'HTML', 'CSS', 'localStorage']}
            />
            <ProjectCard
                src={library}
                link="https://github.com/SrulyP/library-project"
                projectTitle="Library App"
                projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                technologies={['JavaScript', 'HTML', 'CSS', 'localStorage']}
            />
        </section>
    );
}

export default Projects;
