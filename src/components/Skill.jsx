import '../styles/Skill.css';
import { useInView } from 'react-intersection-observer';

function Skill(props) {
    const { number, text } = props;
    const { ref: myRef, inView: myElementIsVisible } = useInView();
    return (
        <div className="svg-container" ref={myRef}>
            <svg viewBox="0 0 36 36" className="circular-chart orange">
                <path
                    className="circle-bg"
                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className={myElementIsVisible ? 'circle' : ''}
                    strokeDasharray={`${number}, 100`}
                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                    {number}%
                </text>
            </svg>
            <div className="technology">{text}</div>
        </div>
    );
}

export default Skill;
