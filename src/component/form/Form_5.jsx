import Input from "../Input/Input_5";
import './form.scss';
function Form_5(props) {
    return (
        <div className="Form">
            <form onSubmit={props.handleClick}>
                <div className="Group">

                    <Input inp={props.inp1} />
                    <Input inp={props.inp2} />
                    <Input inp={props.inp3} />
                    <Input inp={props.inp4} />
                    <Input inp={props.inp5} />

                </div>
                <div className="ButtonR">
                    <button type="submit">Submit</button>
                </div>
            </form>

        </div>
    );
}

export default Form_5