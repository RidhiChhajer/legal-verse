import './input.scss';
function Input(props) {
    return (
        <div className="Input">
            <label htmlFor={props.inp.id}>{props.inp.label}</label>
            <input type="text" value={props.inp.value} id={props.inp.id} onChange={props.inp.onChange} name={props.inp.id} />
        </div>
    );
}

export default Input