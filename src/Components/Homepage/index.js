import Container from "./Container";
import Header from "./Header";
import TabPage from "../Tabpage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function HomePage() {

    return (
        
            <div>
                    <Header />
                    <Container />
            
            </div>
       
      
    )
    
}

export default HomePage;