import '../App.css';
import battlefield from '../assets/battlefield.png';
import weather from '../assets/weather.png';
import todo from '../assets/todo.png';
import library from '../assets/library.png';
import ProjectCard from '../common/ProjectCard';

function Projects() {
    return (
        <section id="projects" className="projectsSection">
            <ProjectCard
                src={battlefield}
                link="https://github.com/SrulyP/battleship"
                projectTitle="Battlefield"
                projectDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi ab, expedita deleniti eveniet assumenda eos voluptatem
                    asperiores harum soluta vel similique suscipit repellendus
                    error minus facilis veritatis placeat nihil culpa
                    dignissimos architecto enim delectus odit esse. Hic vel
                    similique debitis."
            />
            <ProjectCard
                src={weather}
                link="https://github.com/SrulyP/weather-app"
                projectTitle="Weather App"
                projectDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi ab, expedita deleniti eveniet assumenda eos voluptatem
                    asperiores harum soluta vel similique suscipit repellendus
                    error minus facilis veritatis placeat nihil culpa
                    dignissimos architecto enim delectus odit esse. Hic vel
                    similique debitis."
            />
            <ProjectCard
                src={todo}
                link="https://github.com/SrulyP/to-do-list"
                projectTitle="To-Do App"
                projectDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi ab, expedita deleniti eveniet assumenda eos voluptatem
                    asperiores harum soluta vel similique suscipit repellendus
                    error minus facilis veritatis placeat nihil culpa
                    dignissimos architecto enim delectus odit esse. Hic vel
                    similique debitis."
            />
            <ProjectCard
                src={library}
                link="https://github.com/SrulyP/library-project"
                projectTitle="Library App"
                projectDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi ab, expedita deleniti eveniet assumenda eos voluptatem
                    asperiores harum soluta vel similique suscipit repellendus
                    error minus facilis veritatis placeat nihil culpa
                    dignissimos architecto enim delectus odit esse. Hic vel
                    similique debitis."
            />
        </section>
    );
}

export default Projects;
