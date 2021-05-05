import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'


// USe this link to adjust color schemes
// https://getbootstrap.com/docs/4.0/components/navbar/#color-schemes


export const PageBanner = props => {

    return (
        <Jumbotron fluid style={{color: "#203f6b", backgroundColor: "white"}}>
            <Container className="text-center">
                <h1>{props.page ? props.page : "Home"} Page</h1>
                <p>
                Welcome!
                </p>
            </Container>
        </Jumbotron>
    );
} 