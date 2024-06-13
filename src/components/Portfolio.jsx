import ImageGallery from 'react-image-gallery';
import '../styles/Portfolio.css';
import todoLogin from '../img/todo-login.jpg';
import todoEdit from '../img/todo-edit.jpg';
import todoTasks from '../img/todo-tasks.jpg';
import weatherLogin from '../img/weather-app-login.jpg';
import weatherHomescreen from '../img/weather-app-homescreen.jpg';
import weatherLocations from '../img/weather-app-locations.jpg';
import weatherDetails from '../img/weather-app-details.jpg';

function Portfolio() {
    const projects = [
        {
            description: 'TO DO LIST',
            category: 'Web App',
            projectDate: ' 8 February, 2024',
            projectUrl: 'https://todo-list-front-end-yxgf.onrender.com/',
            repositoryUrl: 'https://github.com/888yalo888/todo-list-front-end',
            about: '',
            screenshotsUrls: [
                {
                    original: todoLogin,
                    originalHeight: '200px',
                    originalWidth: '200px',
                },
                {
                    original: todoTasks,
                    originalHeight: '200px',
                    originalWidth: '200px',
                },
                {
                    original: todoEdit,
                    originalHeight: '200px',
                    originalWidth: '200px',
                },
            ],
        },
        {
            description: 'WEATHER APP',
            category: 'Web App',
            projectDate: '3 June, 2024',
            projectUrl: 'https://weather-app-front-end-vjqh.onrender.com/',
            repositoryUrl: 'https://github.com/888yalo888/weather-app',
            about: '',
            screenshotsUrls: [
                {
                    original: weatherLogin,
                    originalHeight: '400px',
                    originalWidth: '400px',
                },
                {
                    original: weatherHomescreen,
                    originalHeight: '400px',
                    originalWidth: '400px',
                },
                {
                    original: weatherDetails,
                    originalHeight: '400px',
                    originalWidth: '400px',
                },
                {
                    original: weatherLocations,
                    originalHeight: '400px',
                    originalWidth: '400px',
                },
            ],
        },
    ];

    console.log(weatherLogin);
    return (
        <div>
            <div className="title">Portfolio</div>
            {projects.map((el, index) => (
                <div className="project-container" key={index}>
                    <div className="position">{el.description}</div>
                    <div className="carousel-description-container">
                        <div className="carousel-container">
                            <ImageGallery
                                items={el.screenshotsUrls}
                                showBullets={true}
                                slideInterval={5000}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                // autoPlay={true}
                            />
                        </div>

                        <div className="project-info-container">
                            <div>
                                <span className="project-description">
                                    Category:
                                </span>
                                {el.category}
                            </div>
                            <div>
                                <span className="project-description">
                                    Project Date:
                                </span>
                                {el.projectDate}
                            </div>
                            <div>
                                <span className="project-description">
                                    Project URL:
                                </span>{' '}
                                <a href={el.projectUrl} className="link">
                                    {el.projectUrl}
                                </a>
                            </div>
                            <div>
                                <span className="project-description">
                                    Repository URL:
                                </span>{' '}
                                <a href={el.repositoryUrl} className="link">
                                    {el.repositoryUrl}
                                </a>
                            </div>
                            <div className="project-description">About</div>
                            <div>{el.about}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Portfolio;
