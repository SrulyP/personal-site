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
                            I'm a Computer Science graduate passionate about
                            solving problems through code. I build full-stack
                            applications, break down complex systems into
                            simpler solutions, and love learning new
                            technologies.
                        </p>
                    </div>
                </div>
                <div className="aboutMe">
                    <h2>About Me</h2>
                    <p className="aboutMeDescription">
                        With a BS in Computer Science from Oregon State (3.95
                        GPA), I've developed skills across multiple programming
                        languages and frameworks. I'm experienced in
                        problem-solving, debugging, and collaborating on
                        projects that range from backend systems to interactive
                        frontend experiences. I'm interested in software roles
                        where I can grow, contribute, and tackle challenging
                        problems.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
