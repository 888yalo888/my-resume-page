import '../styles/ContactMe.css';

function ContactMe(props) {
    const { email, phone, address, mapLink } = props;

    return (
        <div className="contact-me">
            <h3 className="contact-me-title">CONTACT ME</h3>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:${phone}`}>{phone}</a>
            <a href={mapLink} target="_blank" rel="noreferrer">
                {address}
            </a>
        </div>
    );
}

export default ContactMe;
