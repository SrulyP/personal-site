import '../App.css';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'he' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <section className="headerSection">
            <p>{t('header.name')}</p>
            <div className="links">
                <a href="#projects">{t('header.projects')}</a>
                <a href="#contact">{t('header.contact')}</a>
                <button onClick={toggleLanguage}>
                    {i18n.language === 'en' ? 'עברית' : 'English'}
                </button>
            </div>
        </section>
    );
}

export default Header;
