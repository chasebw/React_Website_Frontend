import React, { createContext, useState } from 'react'

export const ProfilePageContext = createContext()

export const ProfilePageContextProvider = (props) => {

    const [userInfo, setUserInfo] = useState()

    const grabUserInfo = async () => {
        console.log("Grabbing User")
        try {
            let res = await fetch('/getUser', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: "Just requesting Info From Server",
                })
            })

            let result = await res.json();
            console.log(result)
            setUserInfo(result)
            return result
        }

        catch (e) {
            console.log(e)
            return {success:false, action: "AddPost", error: e}
        }
    }

    return (
        <ProfilePageContext.Provider
        value={{
            userInfo,
            setUserInfo,
            grabUserInfo}}
        >
        {props.children}
        </ProfilePageContext.Provider>
    )
} 