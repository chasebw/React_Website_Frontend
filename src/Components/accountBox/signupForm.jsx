import React, { useContext, useState } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common'
import {Marginer} from "../Marginer";
import { AccountContext } from './accountContext';

export function SignupForm(props){
    const { switchToSignin } = useContext(AccountContext);

    const placeholderState = {username: "", email: "", password: "", confirmPassword: ""}
    const [signupInfo, setSignupInfo] = useState(placeholderState)
    const [errorMessage, setErrorMessage] = useState("")

    const handleFormChange = (e) => {
        setSignupInfo({...signupInfo, [e.target.name]:e.target.value})
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        console.log("Running Signup")
        const result = await runSignup()
        console.log(`Result Signup: ${result}`)
        if (result.success)
        {
            switchToSignin()
            setSignupInfo(placeholderState)
        }
        else 
        {
            console.log("Error On signup")
            setErrorMessage(result.message)
            setSignupInfo(placeholderState)
        }

    }

    const runSignup = async () => {
        console.log("Running SignUp request")
        try {
            let res = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: signupInfo.username,
                    email: signupInfo.email,
                    password: signupInfo.password,
                    confirmPassword: signupInfo.confirmPassword
                })
            })

            let result = await res.json();
            console.log(result)
            console.log('Signup Success')
            return result;
        }

        catch (e) {
            console.log(e)
        }
    }

    return (
    <BoxContainer>
        <FormContainer onSubmit={(e) => handleSignup(e)}>

        {errorMessage ? <p className="error_class">{errorMessage}</p>: "" }

        <Input type="text" placeholder="Username" 
        value={signupInfo.username} 
        onChange={(e) => handleFormChange(e)} name="username" />

        <Input type="text" placeholder="Email" 
        value={signupInfo.email} 
        onChange={(e) => handleFormChange(e)} name="email"/>

        <Input type="password" placeholder="Password" 
        value={signupInfo.password} 
        onChange={(e) => handleFormChange(e)} name="password" />

        <Input type="password" 
        placeholder="Confirm Password" 
        value={signupInfo.passwordConfirm} 
        onChange={(e) => handleFormChange(e)} name="confirmPassword" />

        <Marginer direction="vertical" margin={11}/>
        <SubmitButton type="submit">Signup</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink>
        Already have an account <BoldLink href="#" onClick={switchToSignin}>Signin</BoldLink> 
        </MutedLink>
        <Marginer direction="vertical" margin="1em" />

        </FormContainer>
    </BoxContainer>
    );
}