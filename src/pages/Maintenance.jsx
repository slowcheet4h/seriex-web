import { useEffect } from "react";

export default function Maintenance() {
    useEffect(() => {
        document.title = "Seriex is on maintenance.";
    }, []);

    return (<>
        <div className="main full-height noisy-back">
            <div className="glow-top"></div>
            <div className="container">
                <span className="maintenance-text">seriex is on maintenance :DDDD</span>
            </div>
        </div>
    </>);
}