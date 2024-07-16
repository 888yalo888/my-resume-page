import WorkPlace from './WorkPlace';
import '../styles/ExpertiseBlock.css';

function ExpertiseBlock(props) {
    const { workList, title } = props;
    //console.log(props);
    return (
        <>
            <h2 className="title">{title}</h2>
            {workList.map((el) => (
                <WorkPlace key={el.time} {...el} />
            ))}
        </>
    );
}

export default ExpertiseBlock;
