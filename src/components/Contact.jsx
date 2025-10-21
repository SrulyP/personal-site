import { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../App.css';
import resume from '../assets/resume.pdf';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import emailIcon from '../assets/email.svg';
import resumeIcon from '../assets/resume.svg';

function Contact() {
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
                    alert('Message sent successfully!');
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <section id="contact" className="contactSection">
            <h2 className="contactTitle">Get in Contact</h2>
            <p className="contactDescription">
                Currently seeking new opportunities. Let's connect to discuss
                how my skills align with your team's needs!
            </p>

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
                <a className="linkItem" href={resume}>
                    <img src={resumeIcon} alt="resume icon" />
                    <span>Resume</span>
                </a>
            </div>

            <h3 className="leaveMessageTitle">Leave a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="contactForm">
                <div className="formRowShort">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name:"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email:"
                        required
                    />
                </div>
                <div className="formRowLong">
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject:"
                        required
                    />
                </div>
                <div className="formRowLong">
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message:"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submitBtn">
                    Send
                </button>
            </form>
        </section>
    );
}

export default Contact;
