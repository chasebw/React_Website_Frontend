import React, { useContext, useState } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common'
import {Marginer} from "../Marginer";
import { AccountContext } from './accountContext'
import { useHistory } from 'react-router-dom'

const SERVER = process.env.REACT_APP_SERVER || '/'

export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext)

    const [errorMessage, setErrorMessage] = useState("")
 
    const history = useHistory()
    const handleNavToHome = () => [
        history.push('/home')
    ]

    const placeholderLogin = {username: "", password: ""}
    const [loginInput, setLoginInput] = useState(placeholderLogin)

    const onChange = (e) => {
        setLoginInput({...loginInput, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form is being submit")
        const result = await runLogin()
        console.log(result)
        setLoginInput(placeholderLogin)
        if(result.success)
        {
            handleNavToHome();
            setLoginInput(placeholderLogin)
            setErrorMessage("")
        }
        else 
        {
            console.log("Unsuccessful Login")
            setErrorMessage(result.message)
            setLoginInput({...loginInput, password: ""})
        }
    }

    const runLogin = async () => {

        console.log("Running login request")
        try {
            let res = await fetch( `${SERVER}login`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: loginInput.username,
                    password: loginInput.password,
                })
            })

            let result = await res.json();
            console.log(result)
            return result
        }
        catch (e) {
            console.log(e)
            return {success: false, action: "Login"}
        }
    }

    return (
    <BoxContainer>
        <FormContainer action="/login" method="POST" onSubmit={(e) => handleSubmit(e)}>
        {errorMessage ? <p class="error_class">{errorMessage}</p> : ""}
        <Input type="text" placeholder="Username" name="username" value={loginInput.username} onChange={(e)=> onChange(e)}/>
        <Input type="password" placeholder="Password" name="password" value={loginInput.password} onChange={(e) => onChange(e)}/>
        <Marginer direction="vertical" margin={11}/>
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em"/>
        {/* <Link to="/home"><SubmitButton type="submit">Login</SubmitButton></Link> */}
        <SubmitButton type="submit">Login</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink>
        Don't have an account? <BoldLink href="#" onClick={switchToSignup}>Signup</BoldLink> 
        </MutedLink>
        </FormContainer>
    </BoxContainer>
    );
}