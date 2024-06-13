import ImageGallery from 'react-image-gallery';
import '../styles/Portfolio.css';

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
                    original: './src/img/todo-login.png',
                    originalHeight: '200px',
                    originalWidth: '200px',
                },
                {
                    original: './src/img/todo-tasks.png',
                    originalHeight: '200px',
                    originalWidth: '200px',
                },
                {
                    original: './src/img/todo-edit.png',
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
                    original: './src/img/weather-app-login.png',
                    originalHeight: '400px',
                    originalWidth: '400px',
                },
                {
                    original: './src/img/weather-app-homescreen.png',
                    originalHeight: '400px',
                    originalWidth: '400px',
                },
                {
                    original: './src/img/weather-app-details.png',
                    originalHeight: '400px',
                    originalWidth: '400px',
                },
                {
                    original: './src/img/weather-app-locations.png',
                    originalHeight: '400px',
                    originalWidth: '400px',
                },
            ],
        },
    ];
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
