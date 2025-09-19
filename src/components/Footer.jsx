import '../App.css';

function Footer() {
    return (
        <section className="footerSection">
            <div className="inTouch">
                <a>Email</a>
                <a>LinkedIn</a>
                <a>Github</a>
                <a>Resume</a>
            </div>
            <div className="copyright">
                &copy; Israel Polasak {new Date().getFullYear()} All rights
                reserved.
            </div>
        </section>
    );
}

export default Footer;
