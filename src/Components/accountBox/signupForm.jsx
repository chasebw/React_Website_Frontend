import React, { useContext } from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common'
import {Marginer} from "../Marginer";
import { AccountContext } from './accountContext';

export function SignupForm(props){
    const { switchToSignin } = useContext(AccountContext);


    return (
    <BoxContainer>
        <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
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