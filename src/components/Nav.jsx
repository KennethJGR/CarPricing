import logo from "../assets/logo.webp";
import { AiFillQuestionCircle } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
const Nav = () => {
    return (
        <>
            <nav className="flex justify-between p-4 ">
                <div
                    className="flex justify-between items-center  "
                >
                    <img src={logo} alt="logo" className="w-30 h-20" />
                </div>
                <div
                    className="flex justify-between items-center space-x-4
                text-xl "
                >
                    <a href="#" className="">
                        Inicio
                    </a>
                    <a href="#">Servicios</a>
                    <a href="#">Kit plans</a>
                    <a href="#">Quienes somos?</a>
                    <a href="#">Recompensas</a>
                    <a href="#">
                        <AiFillQuestionCircle className="text-2xl" />
                    </a>
                    <a href="#">
                        <RiCustomerService2Fill className="text-2xl" />
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Nav;
