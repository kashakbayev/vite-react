import { useState } from "react"
import logo from '/logo.png'
import "./Header.css"

export default function Header() {
    const [now, setNow] = useState(new Date());

    setInterval(() => {
        setNow(new Date());
    }, 1000);

    function handleClick() {
        
    }

    return (
        <section className="h-wrapper">
            <div className="flexCenter h-container paddings innerWidth">
                <img src={logo} alt="" width={200}/>

                <div className="h-menu">
                    <a href="" className="">
                        О нас
                    </a>
                    <a href="">
                        <button className="btn btn-outline-success" onClick={handleClick}>Присоединиться</button>
                    </a>
                </div>
            </div>
        </section>
    )
}