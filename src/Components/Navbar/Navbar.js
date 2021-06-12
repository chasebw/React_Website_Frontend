import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'
import { Marginer } from '../Marginer'
import { Link, NavLink, useHistory } from 'react-router-dom' 
import { pages } from '../data/pages'

// Note: use this link to adjust color schemes
// https://getbootstrap.com/docs/4.0/components/navbar/#color-schemes


const SERVER = process.env.REACT_APP_SERVER || '/'

export const SiteNavbar = props => {
    
    const history = useHistory()
    const handleSignOut = () => {
        runLogout()
        history.push('/')
    }

    const runLogout = async () => {

        console.log("Running Logout")

        try {
            let res = await fetch(`${SERVER}logout`, {
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
                    <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                    {pages.map(page => <Nav.Link><Link to={`/${page}`}>{page[0].toUpperCase() + page.slice(1)}</Link></Nav.Link>)}
                </Nav>
                <Nav>
                    <Button variant="outline-primary" onClick={() => history.push('/profile')}>Profile</Button>
                    <Marginer direction="horizontal" margin="1.6em"/>
                    <Button variant="outline-danger" onClick={() => handleSignOut()}>Sign-out</Button>
                </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
} 