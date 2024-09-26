import { Users } from "./Users"

export const User = ({ id, name, surn, age, isEdit, toggleMod, editUser}) => {
    return (
        <div>
            name : {isEdit ? <input value={name} onChange={e => editUser(id, "name", e)}  /> : <span>{name}</span> }
            <br />
            surn : {isEdit ? <input value={surn} onChange={e => editUser(id, "surn", e)}  /> : <span>{surn}</span>}
            <br />
            age : {isEdit ? <input value={age}   onChange={e => editUser(id, "age", e)} /> : <span>{age}</span>}
            <button onClick={() => toggleMod(id)}>{isEdit ? "save" : "edit"}</button>
        </div>
    )
}

