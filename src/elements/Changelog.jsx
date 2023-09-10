import { Check, Edit3, Trash2 } from 'react-feather';
export default function Changelog() {
    return (<>
        <div className="changelog">
            <ul>
                <h6>10.09.2023</h6>
                <li className="added"><Check /><span>website is online!</span></li>
                <h6>12.02.2023</h6>
                <li className="fixed"><Edit3 /><span>fixed dura-patc</span>h</li>
                <li className="removed"><Trash2 /><span>removed firion area</span></li>
                <li className="removed"><Trash2 /><span>removed semoteo</span></li>
                <li className="added"><Check /><span>added cats</span></li>
                <li className="fixed"><Edit3 /><span>fixed dura-patc</span>h</li>
                <li className="removed"><Trash2 /><span>removed firion area</span></li>
                <li className="removed"><Trash2 /><span>removed semoteo</span></li>
                <li className="added"><Check /><span>added cats</span></li>
                <li className="fixed"><Edit3 /><span>fixed dura-patc</span>h</li>
                <li className="removed"><Trash2 /><span>removed firion area</span></li>
                <li className="removed"><Trash2 /><span>removed semoteo</span></li>
                <li className="added"><Check /><span>added cats</span></li>
                <li className="fixed"><Edit3 /><span>fixed dura-patc</span>h</li>
                <li className="removed"><Trash2 /><span>removed firion area</span></li>
                <li className="removed"><Trash2 /><span>removed semoteo</span></li>
            </ul>
        </div>
    </>);
}