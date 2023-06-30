import React, {useState, useRef} from "react";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [passObj, setPassObj] = useState({
        password: '',
        passwordRepeat: ''
    });
    const [isEmailValid, setIsEmailValid] = useState(true);

    const inputRef = useRef(null);
    const someRef = useRef(0);


    const onEmailChange = ({target: {value}}) => {
        if (!isEmailValid) {
            setIsEmailValid(true);
        }
        setEmail(value);
    };

    const onPassChange = ({target: {value, name}}) => {
        setPassObj({
            ...passObj,
            [name]: value
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (!EMAIL_REGEX.test(email)) {
            setIsEmailValid(false);

            inputRef.current?.focus();

            if (inputRef.current) {
                console.log(inputRef.current.nextElementSibling);
            }
        }
    };

    const onChangeRef = () => {
        someRef.current++;
    };

    const doPasswordsMatch = passObj.password === passObj.passwordRepeat;

    console.log('RENDER');

    // TODO useEffect + useRef
    // TODO React + css
    
    return (
        <form onSubmit={onFormSubmit}>
            <div>{email}</div>
            {!isEmailValid && <div style={{color:'red'}}>email is not valid</div> }
            <input
                type='text'
                onChange={onEmailChange}
                value={email}
                ref={inputRef}
            />
            <input name='password' type='password' onChange={onPassChange} value={ passObj.password }/>
            <input name='passwordRepeat' type='password' onChange={onPassChange} value={ passObj.passwordRepeat }/>
            {!doPasswordsMatch && <div>Passwords don't match</div>}
            <button type="submit">Register</button>
            <button onClick={onChangeRef} type='button' >change ref</button>
        </form>
    );
};