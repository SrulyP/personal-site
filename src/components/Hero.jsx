import '../App.css';
import heroImg from '../assets/heroImg.jpg';

function Hero() {
    return (
        <section id="hero" className="heroSection">
            <div className="info">
                <div className="introduction">
                    <img
                        src={heroImg}
                        className="hero"
                        alt="Profile picture of Israel Polasak"
                    />
                    <div>
                        <h1>Hi, I'm Israel!</h1>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Omnis, in? Harum id quae obcaecati architecto.
                            Sunt natus fugiat eum aperiam.
                        </p>
                    </div>
                </div>
                <div className="aboutMe">
                    <h2>About Me</h2>
                    <p className="aboutMeDescription">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi ab, expedita deleniti eveniet assumenda eos
                        voluptatem asperiores harum soluta vel similique
                        suscipit repellendus error minus facilis veritatis
                        placeat nihil culpa dignissimos architecto enim delectus
                        odit esse. Hic vel similique debitis.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
