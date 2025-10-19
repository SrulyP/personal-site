import '../App.css';
import resume from '../assets/resume.pdf';

function Footer() {
    return (
        <section className="footerSection">
            <h3 className="inTouchTitle">Get In Touch</h3>
            <div className="inTouch">
                <a href="mailto:israelpolasak@gmail.com">Email</a>
                <a
                    href="https://linkedin.com/in/israelpolasak"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/SrulyP"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a href={resume} target="_blank">
                    Resume
                </a>
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()} Israel Polasak | All rights
                reserved.
            </div>
        </section>
    );
}

export default Footer;
