import Nav from "./Nav";
import Kits from "./Kits";
import Services from "./Services";
import Testimonio from "./Testimonio";
import Footer from "./Footer";
import bit from "../assets/bit.png";

const AppSafe = () => {
    return (
        <>
            <div
             className="bg-gradient-to-r from-blue-400 to-purple-600 text-white font-sans antialiased"
            >
                <Nav />
                <header className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
                        <div>
                            {" "}
                            <h1 className="text-white text-center text-4xl font-black">
                                ¡Bienvenido a Barter Capital Group!
                            </h1>
                            <h5>
                                Se parte de nuestra familia y podremos recorrer juntos el camino
                                para crear un estilo de vida con libertad financiera.
                            </h5>
                            <button className="bg-blue-500 hover:bg-purple-700 text-white mt-2 font-bold py-2 px-4 rounded transition duration-500 ease-in-out">
                                <a href="#contact">Registrate ahora</a>
                            </button>
                        </div>
                        <div
                        className="flex justify-center items-right"
                        >
                            <img src={bit} alt="bit" className="w-40 h-40 " />
                        </div>
                    </div>
                </header>
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
