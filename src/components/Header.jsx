import { useState } from "react"
import logo from '/logo.png'

export default function Header() {
    const [now, setNow] = useState(new Date());

    setInterval(() => {
        setNow(new Date());
    }, 1000);

    return (
        <header >
            <div>
                <img className="logo" src={logo} alt="" />
            </div>

            <span>Time: {now.toLocaleTimeString()}</span>
        </header>
    )
}