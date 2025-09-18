import styles from './HeaderStyles.module.css';

function Header() {
    return (
        <section className={styles.headerSection}>
            <p>Israel</p>
            <div className={styles.links}>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </section>
    );
}

export default Header;
