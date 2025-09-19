import '../App.css';

function Skills() {
    const languages = ['Python', 'JavaScript', 'C', 'x86 Assembly', 'SQL'];
    const tools = ['React', 'Flask', 'HTML', 'CSS', 'Git', 'Github'];

    return (
        <section id="skills" className="skillsSection">
            <div>
                <h2>Languages</h2>
                <ul className="languageList">
                    {languages.map((lang, index) => (
                        <li key={index}>{lang}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Tools</h2>
                <ul className="toolsList">
                    {tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Skills;
