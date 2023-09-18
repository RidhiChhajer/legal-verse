import './heading.scss'
function Heading(props) {
    return(
        <div className="Heading">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default Heading