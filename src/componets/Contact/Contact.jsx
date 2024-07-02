import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode , faPhone ,faEnvelope ,faLocationCrosshairs} from '@fortawesome/free-solid-svg-icons';
import './contact.scss';

const Contact = () => {
    const information = [
        { icons: <FontAwesomeIcon icon={faPhone} />, title: "Phone", description: "9360111899" },
        { icons: <FontAwesomeIcon icon={faEnvelope} />, title: "Email", description: "gunasekaran4031@gmail.com" },
        { icons: <FontAwesomeIcon icon={faLocationCrosshairs} />, title: "Location", description: "Chennai, Tamilnadu" },
    ];

    // const details = ({ icons, title, description }) => {
    //     return (
    //         <div className="info-container">
    //             <div className="icons">{icons}</div>
    //             <div className="title-desc">
    //                 <h1>{title}</h1>
    //                 <span>{description}</span>
    //             </div>
    //         </div>
    //     );
    // };

    return (
        <div className='contact'>
            <div className="container">
                <div className="title">
                    <h1>Get In Touch!</h1>
                    <h2>Obviously I'm a Web Designer. Web Developer with over 7 years of <br /> experience. Experienced with all stages of the development.</h2>
                </div>
                <div className="contact-info">
                    <div className="contact-form">
                        <form>
                            <div className="input-style">
                                <label>Name :</label>
                                <input type="text" name="user_name" />
                            </div>
                            <div className="input-style">
                                <label>Email :</label>
                                <input type="email" name="user_email" />
                            </div>
                            <div className="input-style">
                                <label>Subject :</label>
                                <input type="text" name="user_subject" />
                            </div>
                            <div className="input-style">
                                <label>Message :</label>
                                <textarea rows={2}  name="message" />
                            </div>
                            <input type="submit" value="Send Message" className='btn' />
                        </form>
                    </div>
                    <div className="information">
                        {information.map((info, index) => (
                            <div className="class-info" key={index}>
                                <div className="icons">{info.icons}</div>
                                <div className="address">
                                    <h1>{info.title}</h1>
                                    <span>{info.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
