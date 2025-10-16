import '../App.css';
import resume from '../assets/resume.pdf';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';
import emailIcon from '../assets/email.svg';
import resumeIcon from '../assets/resume.svg';

function Contact() {
    return (
        <section id="contact" className="contactSection">
            <h2>Contact</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                quia?
            </p>

            <h3 className="contactSubtitle">Lorem Ipsum</h3>
            <p className="contactDescription">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incidididunt ut labore et dolore magna
            </p>

            <div className="contactLinks">
                <div className="linkItem">
                    <img src={linkedinIcon} alt="linkedin icon" />
                    <span>linkedin.com/israelpolasak</span>
                </div>
                <div className="linkItem">
                    <img src={githubIcon} alt="github icon" />
                    <span>github.com/SrulyP</span>
                </div>
                <div className="linkItem">
                    <img src={emailIcon} alt="email icon" />
                    <span>israelpolasak@gmail.com</span>
                </div>
                <div className="linkItem">
                    <img src={resumeIcon} alt="resume icon" />
                    <span>Resume</span>
                </div>
            </div>

            <h3 className="leaveMessageTitle">Leave Message</h3>
            <div className="contactForm">
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
                <button className="submitBtn">Send</button>
            </div>
        </section>
    );
}

export default Contact;
