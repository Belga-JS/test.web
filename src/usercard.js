import React from 'react';
import { Link, } from 'react-router-dom'

const UserCard = (props) => {
    const { user = {} } = props

    return (
        <div className="user-card">

            <div className="user-image" />

            <div className="user-name">{user.name} </div>
            <div className="text2">{user.company.name}</div>
            <div className="text1">{user.address.city} </div>
            <Link to={`/posts/${user.id}`}><button className="flow"> Following </button></Link>
            <div className="text"> {user.email} </div>
            
            
            
           

            
        </div>
    )
}

export default UserCard