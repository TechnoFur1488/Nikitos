import { User } from "./User";
import { useState } from "react";
import { nanoid } from 'nanoid'

const initUsers = [
    { id: nanoid(), name: 'user1', surn: 'surn1', age: 30, isEdit: false },
    { id: nanoid(), name: 'user2', surn: 'surn2', age: 31, isEdit: false },
    { id: nanoid(), name: 'user3', surn: 'surn3', age: 32, isEdit: false },
  ]

export const Users = () => {

    const [users, setUsers] = useState(initUsers);

    const toggleMod = (id) => {
        setUsers(users.map(el => {
            if (el.id === id) {
                el.isEdit = !el.isEdit
            }

            return el
        }))
    }

    const editUser = (id, field, e) => {
        setUsers(users.map(el => {
            if (el.id === id) {
                el[field] = e.target.value
            }

            return el
        }))
    }

    const result = users.map(el => {
        return <User key={el.id} id={el.id} name={el.name} surn={el.surn} age={el.age} isEdit={el.isEdit} toggleMod={toggleMod} editUser={editUser} />
    })

    return ( <>
        {result}
    </>)
}