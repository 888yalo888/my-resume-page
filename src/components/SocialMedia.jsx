import '../styles/SocialMedia.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';
import { FaGithubSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function SocialMedia(props) {
    const { facebook, codewars, github } = props;

    return (
        <div className="find-me-container">
            <IconContext.Provider
                value={{ className: 'social-container-icon' }}
            >
                <h3 className="where-to-find">WHERE TO FIND ME</h3>

                <a
                    href={facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="social-container"
                >
                    <FaFacebookSquare />
                    Facebook
                </a>

                <a
                    href={codewars}
                    target="_blank"
                    rel="noreferrer"
                    className="social-container"
                >
                    <SiCodewars size="14px" />
                    Codewars
                </a>

                <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="social-container"
                >
                    <FaGithubSquare />
                    Github
                </a>
            </IconContext.Provider>
        </div>
    );
}

export default SocialMedia;
