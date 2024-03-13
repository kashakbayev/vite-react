import Img from "/img.jpg"
import Image from "/goodidea.png"
import './Main.css'
import { data } from "./data.js"


export default function Main() {
    return (
        <div className="open">
            <div className="img">
                <img className="img" src={ Img } alt="" />
            </div>

            <div className="deviz">
                <h2>Зарабатывай на маркетплейсе вместе с нами!</h2>
            </div>
        </div>
    )
}