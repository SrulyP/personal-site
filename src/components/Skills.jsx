import '../App.css';
import { useTranslation } from 'react-i18next';

function Skills() {
    const { t } = useTranslation();

    const codingLanguages = t('skills.codingLanguages', {
        returnObjects: true,
    });
    const tools = t('skills.tools', { returnObjects: true });
    const naturalLanguages = t('skills.naturalLanguages', {
        returnObjects: true,
    });

    return (
        <section id="skills" className="skillsSection">
            <h2>{t('skills.title')}</h2>

            <div className="skillsGrid">
                <div className="skillCategory">
                    <h3>{t('skills.codingLanguagesTitle')}</h3>
                    <ul className="skillsList">
                        {codingLanguages.map((lang, index) => (
                            <li key={index}>{lang}</li>
                        ))}
                    </ul>
                </div>

                <div className="skillCategory">
                    <h3>{t('skills.toolsTitle')}</h3>
                    <ul className="skillsList">
                        {tools.map((tool, index) => (
                            <li key={index}>{tool}</li>
                        ))}
                    </ul>
                </div>

                <div className="skillCategory">
                    <h3>{t('skills.naturalLanguagesTitle')}</h3>
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
