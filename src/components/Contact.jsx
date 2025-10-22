import { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../App.css';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import emailIcon from '../assets/email.svg';
import resumeIcon from '../assets/resume.svg';
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert(t('contact.alerts.success'));
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert(t('contact.alerts.failure'));
                }
            );
    };

    return (
        <section id="contact" className="contactSection">
            <h2 className="contactTitle">{t('contact.title')}</h2>
            <p className="contactDescription">{t('contact.description')}</p>

            <div className="contactLinks">
                <a
                    className="linkItem"
                    href="https://www.linkedin.com/in/israelpolasak/"
                    target="_blank"
                >
                    <img src={linkedinIcon} alt="linkedin icon" />
                    <span>LinkedIn.com/israelpolasak</span>
                </a>
                <a
                    className="linkItem"
                    href="https://github.com/SrulyP"
                    target="_blank"
                >
                    <img src={githubIcon} alt="github icon" />
                    <span>GitHub.com/SrulyP</span>
                </a>
                <a className="linkItem" href="mailto:israelpolasak@gmail.com">
                    <img src={emailIcon} alt="email icon" />
                    <span>israelpolasak@gmail.com</span>
                </a>
                <a className="linkItem" href="/resume.pdf">
                    <img src={resumeIcon} alt="resume icon" />
                    <span>{t('contact.links.resume')}</span>
                </a>
            </div>

            <h3 className="leaveMessageTitle">{t('contact.form.title')}</h3>
            <form ref={form} onSubmit={sendEmail} className="contactForm">
                <div className="formRowShort">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={t('contact.form.name')}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder={t('contact.form.email')}
                        required
                    />
                </div>
                <div className="formRowLong">
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder={t('contact.form.subject')}
                        required
                    />
                </div>
                <div className="formRowLong">
                    <textarea
                        name="message"
                        id="message"
                        placeholder={t('contact.form.message')}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submitBtn">
                    {t('contact.form.send')}
                </button>
            </form>
        </section>
    );
}

export default Contact;
