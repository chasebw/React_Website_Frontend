import React from 'react'
import { SiteNavbar } from '../Navbar/Navbar';
import { ProfileBar } from './ProfileBar'
import { ProfileForm } from './ProfileForm'
import './ProfilePage.css'
import { ProfilePageContextProvider } from './ProfilePageContext'


export const ProfilePage = () => {
    return (
        <>
            <ProfilePageContextProvider>
                <SiteNavbar />
                <ProfileBar />
                <ProfileForm />
            </ProfilePageContextProvider>
        </>
    )
}