import classes from './Input.module.css';

const Input = (props) => {
    return <div className={classes.input}>

        <label htmlfor={props.input.id}>{props.label}</label>
        <input {...props.input}/>
        {/* input 내의 ...props.input의 의미 : props.input 내의 모든 객체데이터를 읽겠다 */}
    </div>
}

export default Input;