import ContactMe from './ContactMe';
import SocialMedia from './SocialMedia';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className=" footer">
            <div className="contact-social-container">
                <ContactMe
                    email="olgaorlova241@gmail.com"
                    phone="+12345566"
                    address="5604 Bentwood Trail, Dallas"
                    mapLink="https://goo.gl/maps/J9b9H7GxpzwkmWMUA"
                />
                <SocialMedia
                    facebook="https://www.facebook.com"
                    codewars="https://www.codewars.com/users/888yalosinger"
                    github="https://github.com/888yalo888"
                />
            </div>
        </footer>
    );
}

export default Footer;
