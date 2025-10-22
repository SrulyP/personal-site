import '../App.css';
import heroImg from '../assets/heroImg.jpg';
import { useTranslation } from 'react-i18next';

function Hero() {
    const { t } = useTranslation();

    return (
        <section id="hero" className="heroSection">
            <div className="info">
                <div className="introduction">
                    <img
                        src={heroImg}
                        className="hero"
                        alt="Profile picture of Israel Polasak"
                    />
                    <div>
                        <h1>{t('hero.greeting')}</h1>
                        <p className="description">{t('hero.description')}</p>
                    </div>
                </div>
                <div className="aboutMe">
                    <h2>{t('hero.aboutMeTitle')}</h2>
                    <p className="aboutMeDescription">
                        {t('hero.aboutMeDescription')}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
