import '../App.css';
import battlefield from '../assets/battlefield.png';
import weather from '../assets/weather.png';
import todo from '../assets/todo.png';
import library from '../assets/library.png';
import thisSite from '../assets/thisSite.png';
import smallsh from '../assets/smallsh.png';
import ProjectCard from '../common/ProjectCard';

function Projects() {
    return (
        <section id="projects" className="projectsSection">
            <h2>My Projects</h2>
            <ProjectCard
                src={thisSite}
                link="https://github.com/SrulyP/personal-site"
                projectTitle="Personal Site"
                projectDesc="My personal portfolio built with React and Vite to showcase my projects and skills. Features modular components and interactive project cards. Building this site helped me practice React component architecture and props handling."
                technologies={['React', 'Vite', 'JSX', 'CSS']}
                learnings="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            />
            <ProjectCard
                src={smallsh}
                link="https://github.com/SrulyP/smallsh"
                projectTitle="Smallsh"
                projectDesc="A custom UNIX-based shell that supports built-in commands (cd, status, exit), execution of external commands via the environment path and the exec family, foreground/background process management, input/output redirection, and a foreground-only mode toggled by SIGTSTP (Ctrl - Z)."
                technologies={['C', 'Linux', 'System Programming']}
                learnings="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <ProjectCard
                src={battlefield}
                link="https://github.com/SrulyP/battleship"
                projectTitle="Battlefield"
                projectDesc="A JavaScript implementation of the classic Battleship game. Users can drag and drop ships onto a setup grid and then play against a computer opponent with turn-based attacks. The game displays hits, misses, and sunk ships. The project reinforced my knowledge of unit testing, using Jest to test core functionality like ship placement, attacks, and sinking mechanics."
                technologies={['JavaScript', 'HTML', 'CSS', 'Jest']}
                livePreviewLink="https://srulyp.github.io/battleship/"
                learnings="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />
            <ProjectCard
                src={weather}
                link="https://github.com/SrulyP/weather-app"
                projectTitle="Weather App"
                projectDesc="A responsive JavaScript app that displays real-time weather data for any city using the Visual Crossing API. Users can search for locations, toggle between Fahrenheit and Celsius, and view multi-day forecasts with dynamic weather icons. The project improved my understanding of asynchronous programming, API integration, and data rendering in the DOM."
                technologies={['JavaScript', 'HTML', 'CSS', 'API']}
                livePreviewLink="https://srulyp.github.io/weather-app/"
                learnings="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est."
            />
            <ProjectCard
                src={todo}
                link="https://github.com/SrulyP/to-do-list"
                projectTitle="To-Do App"
                projectDesc="An interactive JavaScript app for organizing tasks and projects. Users can create projects, add tasks with priorities and due dates, and have all their data saved automatically using localStorage. The project helped me practice modular architecture, factory functions, and dynamic UI rendering."
                technologies={['JavaScript', 'HTML', 'CSS', 'localStorage']}
                livePreviewLink="https://srulyp.github.io/to-do-list/"
                learnings="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
            />
            <ProjectCard
                src={library}
                link="https://github.com/SrulyP/library-project"
                projectTitle="Library App"
                projectDesc="A dynamic JavaScript app for managing and tracking a personal book collection. Users can add, edit, and remove books, mark them as read or unread, and have their data saved automatically using localStorage. The project strengthened my understanding of object-oriented programming, DOM manipulation, and state management."
                technologies={['JavaScript', 'HTML', 'CSS', 'localStorage']}
                livePreviewLink="https://srulyp.github.io/library-project/"
                learnings="Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio nam libero tempore."
            />
        </section>
    );
}

export default Projects;