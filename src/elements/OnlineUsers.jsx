import { useEffect, useState } from "react";

export default function OnlineUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/online_users", {
            method: "GET",
            cache: "no-cache"
        }).then(response => response.json())
            .then(data => {
                /* change the fetch url */
                setUsers(data);
            });

        /* remove this code */
        /* ================ */

    }, []);


    return (
        <div className="online-users">
            <h4>Online</h4>
            <ul style={{ position: "relative" }}>
                {
                    (users && users.length > 0) ? users.map((u, i) => {
                        return (
                            <li key={i}>
                                <img src={u.discord.discord_avatar}></img>
                                <span>{u.username}</span>
                            </li>)
                    }) : (<span style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>No online players :c</span>)
                }


            </ul>
        </div>
    );
}