import React,{ useContext, useState } from "react";
import { ToggleTheme } from "../App";

function UseContext(){
    const [comm, setComm] = useState("");
    const [likes, setLikes] = useState(0);

    function HandleComment() {
        window.alert("Comment button clicked");
        setComm("He hid under the covers hoping that nobody would notice him there. It didn't really make much sense since it would be obcvious to anyone who walked into the room that there was someone hiding there, but he still held hope. He heard footsteps coming down the hall and stop in front of the bedroom door. He heard the squeak of the door hinges and someone opened the bedroom door. He held his breadth waiting for whoever was about to discover him, but they never did.");
    }

    function HandleLike() {
        setLikes(likes + 1)
    }

    const theme = useContext(ToggleTheme);
    const themeStyle = {
        backgroundColor: theme?"black":"grey",
        color:theme?"grey":"black",
        padding:"2rem",
        margin:"2rem"
    }

    return(
        <div style={themeStyle}>
        <p className="comment">{comm}</p>
        <button onClick={HandleComment}>Comment</button>
        <p>{likes}</p>
        <button onClick={HandleLike}>Like</button>
        </div>
    )
}

    export default UseContext;