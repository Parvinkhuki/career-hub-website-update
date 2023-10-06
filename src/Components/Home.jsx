import { Outlet, useNavigation } from "react-router-dom";
import Nav from './Nav'
import Footer from "./Footer";
const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
          <Nav></Nav>
      {   navigation.state === "loading" ? 
                <p className="text-3xl text-center">loading........</p>: 
                <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;