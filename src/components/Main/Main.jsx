import Img from "/img.jpg"
import './Main.css'

export default function Main() {
    return (
        <main>
            <div className="first">
                <img id="img" src={ Img } alt="" />
            </div>

        </main>
    )
}