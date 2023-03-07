import { useState, useEffect } from 'react';
import '../stylesheets/Form.css'
const Contact = () => {
    useEffect(() => {
        document.title = "Contact Us"
    }, []);

   
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [question, setQuestion] = useState("");
    const [notification, setNotification] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email !== confirmEmail) {
            setNotification("The emails do not match, please try again.");
            setTimeout(() => {
                setNotification(null);
            }, 5000);
        } else {
            setNotification("Your question has been submitted. Thank you!");
            setTimeout(() => {
                setNotification(null);
            }, 5000);
            setFirstName("");
            setLastName("");
            setEmail("");
            setConfirmEmail("");
            setQuestion("");

        }

    }

    return (
        <div className='page'>
            <h2>Contact us</h2>

            {notification !== null && <p>{notification}</p>}

            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    required
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName" >Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    required
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label htmlFor="email" >Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    required
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="confirmEmail" >Confirm Email</label>
                <input
                    type="email"
                    id="confirmEmail"
                    value={confirmEmail}
                    required
                    placeholder="Confirm Email"
                    onChange={(e) => setConfirmEmail(e.target.value)}
                />

                <label htmlFor="question" className="contact-form__label">Question</label>

                <textarea
                    id="question"
                    value={question}
                    placeholder="Question"
                    onChange={(e) => setQuestion(e.target.value)}
                />

                <button type="submit" className="contact-button">Submit</button>
            </form>
        </div>
    );
}

export default Contact;