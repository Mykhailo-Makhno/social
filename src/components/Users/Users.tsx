import React from 'react';
import {v1} from "uuid";
import {UserType} from "../../redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

const Users = (props: UsersPropsType) => {
    let getUsers=()=>{
if (props.usersPage.users.length===0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            props.setUsers(response.data.items)
        })
}
}
    return <div>
        <button onClick={getUsers}>GetUsers</button>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img  src={u.photos.small!=null?u.photos.small:userPhoto}/>
                    </div>
                    <div>
                        {u.followed?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>:
                            <button onClick={()=>{props.follow(u.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div >{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div >{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;