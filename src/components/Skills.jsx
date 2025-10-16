import '../App.css';

function Skills() {
    const codingLanguages = [
        'Python',
        'JavaScript',
        'C',
        'x86 Assembly',
        'SQL',
    ];
    const tools = ['React', 'Flask', 'HTML', 'CSS', 'Git', 'Github'];
    const naturalLanguages = [
        'English - Native',
        'Yiddish - Native',
        'Spanish - Fluent',
        'Hebrew - Proficient',
    ];

    return (
        <section id="skills" className="skillsSection">
            <h2>Areas of Expertise</h2>

            <div className="skillsGrid">
                <div className="skillCategory">
                    <h3>Coding Languages</h3>
                    <ul className="skillsList">
                        {codingLanguages.map((lang, index) => (
                            <li key={index}>{lang}</li>
                        ))}
                    </ul>
                </div>

                <div className="skillCategory">
                    <h3>Tools</h3>
                    <ul className="skillsList">
                        {tools.map((tool, index) => (
                            <li key={index}>{tool}</li>
                        ))}
                    </ul>
                </div>

                <div className="skillCategory">
                    <h3>Natural Languages</h3>
                    <ul className="skillsList">
                        {naturalLanguages.map((lang, index) => (
                            <li key={index}>{lang}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;
