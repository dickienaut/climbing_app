import React from 'react'
import MyClimbs from './MyClimbs.js'
import EditProfileForm from './EditProfileForm.js'

const ProfilePage = (props) => {
    return(<div>
        <div id="edit-profile-container">
         <EditProfileForm deleteProfile={props.deleteProfile} onEdit={props.onEdit} user={props.user} />
        </div>
        <div id="my-climbs">
         <MyClimbs climbs={props.user.climbs} />
        </div>

    </div>)
}

export default ProfilePage;