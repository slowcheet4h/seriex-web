import { useEffect, useState } from "react";
import Navbar from "../elements/Navbar";

export default function Playerlist() {

    let [playerList, setPlayerList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8081/player_list", {
            method: "GET",
            cache: "no-cache"
        }).then(response => response.json())
            .then(data => {
                /* change the fetch url */
                setPlayerList(data);
            });

        /* remove this code */

        /* ================ */

    }, []);

    const convertToTime = function (ms) {
        return new Date(ms).toLocaleString();
    };

    const convertToHours = function (ms) {
        return Math.round(ms / 1000 / 60 / 60);
    }

    return (<>
        <div className="main">
            <Navbar />
            <div className="playerlist">
                <table>
                    <thead>
                        <tr>
                            <th>avatar</th>
                            <th>username</th>
                            <th>playtime</th>
                            <th>last login</th>
                            <th>registered at</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(playerList && playerList.length > 0) ? playerList.map((player, index) => {
                            return (
                                <tr key={index}>
                                    <td><img src={player.discord.discord_avatar} /></td>
                                    <td>{player.username}</td>
                                    <td>{convertToHours(player.playTime)}</td>
                                    <td>{convertToTime(player.discord.registeredAt)}</td>
                                    <td>{convertToTime(player.lastLogin)}</td>
                                </tr>
                            );
                        }) : (<span>Empty player list :c</span>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    </>);
}