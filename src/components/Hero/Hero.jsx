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
                <h2>About Me</h2>
                <p className={styles.aboutMeDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi ab, expedita deleniti eveniet assumenda eos voluptatem
                    asperiores harum soluta vel similique suscipit repellendus
                    error minus facilis veritatis placeat nihil culpa
                    dignissimos architecto enim delectus odit esse. Hic vel
                    similique debitis.
                </p>
            </div>
        </section>
    );
}

export default Hero;
