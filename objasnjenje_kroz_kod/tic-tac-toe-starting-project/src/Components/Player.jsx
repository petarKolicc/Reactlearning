import { useState } from "react";

export default function Player({ initalName, symbol }) {
    
    const [playerName, setPlayerName] = useState(initalName)
    const [isEditing, setIsEditing] = useState(false)
    
    function handleEditClick()
    {
        setIsEditing((editing)=> editing = !editing)
        console.log("pozvan sam")
    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    if(!isEditing)
    {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }

    return (
        <li>
            <span className="player">
                {/* <span className="player-name">{name}</span> */}
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Edit" : "Save"}</button>
        </li>
    );
}