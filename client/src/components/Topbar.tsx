import Img1 from "../assets/image.png" ;
import Img2 from "../assets/SearchIcon.jpeg" ;

export const Topbar = () => {
    return(
        <nav className="Topbar">
            <div className="logodiv">
                <img src={Img1} alt="Logo" />
                <span> Mind Draft </span>
            </div>
            <div className="Searchbar">
                <img src={Img2} alt="" />
                <input type="text" placeholder="Search"/>   
            </div>
        </nav>
    )
}