import styles from './FooterStyles.module.css';

function Footer() {
    return (
        <section>
            <div className={styles.inTouch}>
                <a>Email</a>
                <a>LinkedIn</a>
                <a>Github</a>
                <a>Resume</a>
            </div>
            <div className={styles.copyright}>
                &copy; Israel Polasak {new Date().getFullYear()} All rights
                reserved.
            </div>
        </section>
    );
}

export default Footer;
