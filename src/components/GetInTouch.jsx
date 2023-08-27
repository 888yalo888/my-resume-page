import "../styles/GetInTouch.css";


function GetInTouch(props) {
  const { name, email, phone, message } = props;
  return (
    <>
      <form className="get-in-touch-form">
        <h2 id="get-in-touch">Get in touch</h2>
        <input className="name" placeholder={name} type="text" />
        <input className="email" placeholder={email} type="email" />
        <input className="phone" placeholder={phone} type="text" />
        <textarea className="message" placeholder={message} />
        <button className="submit-button">Submit</button>
      </form>
    </>
  );
}

export default GetInTouch;
