import React, { useContext } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common'
import {Marginer} from "../Marginer";
import { AccountContext } from './accountContext'
import { Link } from 'react-router-dom' 


export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext)

    return (
    <BoxContainer>
        <FormContainer>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Marginer direction="vertical" margin={11}/>
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em"/>
        <Link to="/home"><SubmitButton type="submit">Login</SubmitButton></Link>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink>
        Don't have an account? <BoldLink href="#" onClick={switchToSignup}>Signup</BoldLink> 
        </MutedLink>
        </FormContainer>
    </BoxContainer>
    );
}