import React, {useContext, useEffect, useState} from 'react'
import { ProfilePageContext } from './ProfilePageContext'

export const ProfileBar = (props) => {

    const {userInfo, grabUserInfo} = useContext(ProfilePageContext)
    const [isLoading, setIsLoading] = useState(false)

    useEffect (async () => {
        setIsLoading(true)
        const result = await grabUserInfo()
        console.log(result)
        setIsLoading(false)
    }, [])

    return (
        <div className="profile_page_wrapper">
        <div className="wrapper">
            <div className="left">
                <img src={userInfo ? userInfo.profilePicture : "" } alt="user" style={{ width: 100 }} />
                <h4> {userInfo ? userInfo.username : "" }</h4>
                <p> <i class="fas fa-bolt"></i> Silver Account </p>
            </div>
            <div className="right">

                <div className="info">
                    <h3>Information</h3>
                    <div className="info-data">
                        <div className="data">
                            <h4>Email</h4>
                            <p>{userInfo ? userInfo.email : ""}</p>
                        </div>
                    </div>
                </div>

                <div className="account">
                    <h3>Account</h3>
                    <div className="account-data">
                        <div className="data">
                            <h4>Created</h4>
                            <p>March 12, 2021</p>
                        </div>
                        <div className="data">
                            <h4>Most Viewed Page</h4>
                            <p>Lorem Ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
    )
}