import logo from "../assets/logo.webp";
const Nav = () => {
    return (
        <>
            <nav className="flex justify-between p-4 ">
                <div className="flex justify-between items-center ">
                    <img src={logo} alt="logo" className="w-20" />
                </div>
                <a href="#" className="">
                    Inicio
                </a>
                <a href="#about">Servicios</a>
                <a href="#experience">Kit plans</a>
                <a href="#services">Quienes somos?</a>
                <a href="#portafolio">Recompensas</a>
                <a href="#contact"></a>
            </nav>
        </>
    );
};

export default Nav;
