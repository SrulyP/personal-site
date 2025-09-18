import styles from './ContactStyles.module.css';

function Contact() {
    return (
        <section id="contact" className={styles.container}>
            <h1 className="sectionTitle">Contact</h1>
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
