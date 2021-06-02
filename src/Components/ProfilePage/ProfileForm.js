import { Form, Button } from 'react-bootstrap'
import React, { useState, useContext } from 'react'
import { ProfilePageContext } from './ProfilePageContext'


//Relating to files in react
// https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react
export const ProfileForm = () => {

    const {grabUserInfo} = useContext(ProfilePageContext)
    const [selectedFile, setSelectedFile] = useState(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const handleChangeEmailSubmit = async (e) => {
        e.preventDefault()
        let result = await changeEmail()
        setEmail("")
        grabUserInfo()
    }

    const changeEmail = async () => {
        console.log("Changing Email")

        try {
            let res = await fetch('/changeEmail', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            })

            let result = await res.json();
            return result
        }

        catch (e) {
            return {success:false, action: "changeEmail", error: e}
        }
    }

    const handleChangePasswordSubmit = async (e) =>
    {
        e.preventDefault()
        changePassword()
        setConfirmPassword("")
        setPassword("")
    }

    const changePassword = async () =>
    {
        try {
            let res = await fetch('/changePassword', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    password: password,
                    confirmPassword: confirmPassword
                })
            })

            let result = await res.json();
            return result
        }

        catch (e) {
            return {success:false, action: "changePassword", error: e}
        }

    }

    const handleProfilePictureSubmit = async (e) => {
        e.preventDefault()
        let result = await changeProfilePicture()
        //getUser
        grabUserInfo()
    }

    const changeProfilePicture = async () => {
        console.log("Running Change Profile Picture")
        const formData = new FormData()
        formData.append("profile_picture", selectedFile)

        try {
            let res = await fetch('/changeProfilePicture', {
                method: 'POST',
                body: formData
            })

            let result = await res.json();
            console.log(result)
            return result
        }

        catch (e) {
            console.log(e)
            return {success:false, action: "Change Profile Picture", error: e}
        }
    }

    return (
    <div className="container profile-form-container">
    {/* Change Email */}
        <Form onSubmit={(e) => handleChangeEmailSubmit(e)}> 
            <Form.Group controlId="ChangeEmail">
                <Form.Label className="profile-form-label">Change Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                Ensure to enter in a valid email address.
    </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={email ? false : true}>
                Change Email
  </Button>
        </Form>

        <hr className="fancy-hr"/>

        {/* Change Password */}
     
        <Form onSubmit={(e) => handleChangePasswordSubmit(e)}>
            <Form.Group controlId="ChangePassword">
                <Form.Label className="profile-form-label">Change Password</Form.Label>
                <Form.Control type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Form.Text className="text-muted">
    </Form.Text>
            </Form.Group>
            <Form.Group controlId="ConfirmChangePassword">
                <p></p>
                <Form.Control type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Form.Text className="text-muted">
                Your password must be at least 4 characters and alphanumeric.
    </Form.Text>
            </Form.Group>
            <Button variant="danger" type="submit" disabled={password && confirmPassword ? false : true}>
                Change Password
  </Button>
        </Form>
        <p></p>
<hr className="fancy-hr"/>

        {/* Change Profile Picture */}
        <Form onSubmit={(e) => handleProfilePictureSubmit(e)} encType="multipart/form-data">
            <Form.Group controlId="profile_picture">
                <Form.Label className="profile-form-label">Change Profile Picture</Form.Label>
                <p></p>
                <Form.Control type="file" onChange={(e) => setSelectedFile(e.target.files[0])} /> <br/>
                <Form.Text className="text-muted"> Add a Profile Picture of 200 x 200 dimensions. PNG, JPG, JPEG.
    </Form.Text>
            </Form.Group>
            <p></p>
            <Button variant="secondary" type="submit" disabled={selectedFile ? false : true}>
                Change Profile Picture
  </Button>
        </Form>
    </div>
    )
}