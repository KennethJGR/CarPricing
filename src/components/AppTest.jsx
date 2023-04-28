import Header from "./Header";
import Nav from "./Nav";
import Kits from "./Kits";
import Services from "./Services";
import Testimonio from "./Testimonio";
import Footer from "./Footer";



const AppSafe = () => {
    return (
        <>
            <div
             className="bg-gradient-to-r from-blue-400 to-purple-600 text-white font-sans antialiased"
            >
                <Nav />
                <Header />
              
            </div>
            <div className="bg-gray-200 max-w-fit-content">
                <Kits />
                <Services />
            </div>
            <div className="bg-blue-800 max-w-fit-content">
                <Testimonio />
                <Footer />
            </div>
        </>
    );
};

export default AppSafe;
