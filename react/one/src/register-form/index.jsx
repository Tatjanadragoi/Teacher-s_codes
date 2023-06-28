import React, {useState} from "react";



export const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [passObj, setPassObj] = useState({
        password: '',
        passwordRepeat: ''
    });


    const onEmailChange = ({target: {value}}) => {
        setEmail(value);
    };

    const onPassChange = ({target: {value, name}}) => {
        setPassObj({
            ...passObj,
            [name]: value
        });
    };

    const doPasswordsMatch = passObj.password === passObj.passwordRepeat;

    // TODO focus()
    // TODO validation (regex)
    // TODO React + css
    
    return (
        <form>
            <div>{email}</div>
            <input type='email' onChange={onEmailChange} value={email}/>
            <input name='password' type='password' onChange={onPassChange} value={ passObj.password }/>
            <input name='passwordRepeat' type='password' onChange={onPassChange} value={ passObj.passwordRepeat }/>
            {!doPasswordsMatch && <div>Passwords don't match</div>}
            <button>Register</button>
        </form>
    );
};