import '../App.css';
import resume from '../assets/resume.pdf';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import emailIcon from '../assets/email.svg';
import resumeIcon from '../assets/resume.svg';

function Contact() {
    return (
        <section id="contact" className="contactSection">
            <h1 className="sectionTitle">Contact</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                quia?
            </p>
            <div className="socials">
                <a
                    href="https://www.linkedin.com/in/israelpolasak/"
                    target="_blank"
                >
                    <img src={linkedinIcon} alt="linkedin icon" />
                    <span>linkedin.com/in/israelpolasak</span>
                </a>
                <a href="https://github.com/SrulyP" target="_blank">
                    <img src={githubIcon} alt="github icon" />
                    <span>github.com/SrulyP</span>
                </a>
                <a href="mailto:israelpolasak@gmail.com">
                    <img src={emailIcon} alt="email icon" />
                    <span>israelpolasak@gmail.com</span>
                </a>
                <a href={resume}>
                    <img src={resumeIcon} alt="resume icon" />
                    <button>Resume</button>
                </a>
            </div>

            <p>Leave Message</p>
            <form action="">
                <div className="formRow">
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="formRow">
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="formRow">
                    <label htmlFor="subject" hidden>
                        Subject
                    </label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                    />
                </div>
                <div className="formRow">
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        required
                    ></textarea>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </section>
    );
}

export default Contact;
