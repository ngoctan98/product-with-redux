import Navbar from "./Navbar"
import InputSearch from "./InputSearch";
import './Style.css'

function Header() {
    return (
        <div className="header">
            <Navbar />
            <InputSearch/>
        </div>
        
        
    )
    
}
export default Header;