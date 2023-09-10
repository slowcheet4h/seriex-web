
import Changelog from "../elements/Changelog";
import OnlineUsers from "../elements/OnlineUsers";
import Navbar from "../elements/Navbar";

export default function Main() {
    return (
        <>
            <div className="main">
                <Navbar />
                <div className="info-bar-wrapper">
                    <div className="info-bar">
                        <Changelog />
                        <OnlineUsers />
                    </div>
                </div>

            </div>
        </>
    );
}