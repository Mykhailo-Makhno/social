import React from 'react';
import {v1} from "uuid";
import {UserType} from "../../redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'
class User extends React.Component<UsersPropsType>{
     getUsers=()=>{
        if (this.props.usersPage.users.length===0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }
    render() {
        return <div>
            <button onClick={this.getUsers}>GetUsers</button>
            {
                this.props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img  src={u.photos.small!=null?u.photos.small:userPhoto}/>
                    </div>
                    <div>
                        {u.followed?<button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>:
                            <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}

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
}

export default User;