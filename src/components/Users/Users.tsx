import React from 'react';
import {v1} from "uuid";
import {UserType} from "../../redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";

const Users = (props: UsersPropsType) => {
if (props.usersPage.users.length===0) {
    props.setUsers([
            {
                id: v1(),
                photoUrl: 'http://www.clker.com/cliparts/3/d/3/7/12065718151966625209johnny_automatic_NPS_map_pictographs_part_96.svg.hi.png',
                followed: true,
                fullName: 'Mike',
                status: 'Junior',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: v1(),
                photoUrl: 'http://www.clker.com/cliparts/3/d/3/7/12065718151966625209johnny_automatic_NPS_map_pictographs_part_96.svg.hi.png',
                followed: false,
                fullName: 'Sasha',
                status: 'Midle',
                location: {city: 'Dnipro', country: 'Ukraine'}
            },
            {
                id: v1(),
                photoUrl: 'http://www.clker.com/cliparts/3/d/3/7/12065718151966625209johnny_automatic_NPS_map_pictographs_part_96.svg.hi.png',
                followed: true,
                fullName: 'Dima',
                status: 'Senior',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                photoUrl: 'http://www.clker.com/cliparts/3/d/3/7/12065718151966625209johnny_automatic_NPS_map_pictographs_part_96.svg.hi.png',
                followed: false,
                fullName: 'Sveta',
                status: 'PM',
                location: {city: 'Moscow', country: 'Russia'}
            },
        ]
    )
}
    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl}/>
                    </div>
                    <div>
                        {u.followed?<button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>:
                            <button onClick={()=>{props.follow(u.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div >{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div >{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;