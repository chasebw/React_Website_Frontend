import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import { Marginer } from '../Marginer'
import { Link, useHistory } from 'react-router-dom' 


// Note: use this link to adjust color schemes
// https://getbootstrap.com/docs/4.0/components/navbar/#color-schemes


export const SiteNavbar = props => {
    
    const history = useHistory()
    const handleSignOut = () => {
        runLogout()
        history.push('/')
    }

    const runLogout = async () => {

        console.log("Running Logout")

        try {
            let res = await fetch('/logout', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    action: 'Logging out'
                })
            })

            let result = await res.json();
            console.log(result)
        }

        catch (e) {
            console.log(e)
        }
    }

    return (
            <Navbar collapseOnSelect expand="lg" 
            style={{backgroundColor: "#203f6b"}} 
            variant="dark" 
            className="text-center"
            sticky="top">
                <Navbar.Brand href="#home">
                <img
                src="/friends_logo2.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                /> Buddies & Pals
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#Sports"><Link to="/sports">Sports</Link></Nav.Link>
                    <Nav.Link href="#Photography">Photography</Nav.Link>
                    <Nav.Link href="#Music">Music</Nav.Link>
                    <Nav.Link href="#Skating">Skating</Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="outline-primary">Profile</Button>
                    <Marginer direction="horizontal" margin="1.6em"/>
                    <Button variant="outline-danger" onClick={() => handleSignOut()}>Sign-out</Button>
                </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
} 