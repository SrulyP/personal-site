import '../App.css';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <section className="footerSection">
            <h3 className="inTouchTitle">{t('footer.title')}</h3>
            <div className="inTouch">
                <a href="mailto:israelpolasak@gmail.com">
                    {t('footer.links.email')}
                </a>
                <a
                    href="https://linkedin.com/in/israelpolasak"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t('footer.links.linkedin')}
                </a>
                <a
                    href="https://github.com/SrulyP"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t('footer.links.github')}
                </a>
                <a href="/resume.pdf" target="_blank">
                    {t('footer.links.resume')}
                </a>
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()} {t('footer.name')} |{' '}
                {t('footer.copyright')}
            </div>
        </section>
    );
}

export default Footer;
