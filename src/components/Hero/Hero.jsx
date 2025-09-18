import styles from './HeroStyles.module.css';
import heroImg from '../../assets/heroImg.jpg';

function Hero() {
    return (
        <section id="hero" className={styles.container}>
            <div className={styles.info}>
                <img
                    src={heroImg}
                    className={styles.hero}
                    alt="Profile picture of Israel Polasak"
                />
                <h1>Hi, I'm Israel!</h1>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis, in? Harum id quae obcaecati architecto. Sunt natus
                    fugiat eum aperiam.
                </p>
            </div>
        </section>
    );
}

export default Hero;
