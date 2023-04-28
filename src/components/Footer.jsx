import logo from "../assets/logo.webp";
import { AiFillFacebook,AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
                <div className="">
                    <img src={logo} alt="logo" className="w-40" />
                    <h2
                    className="text-xl"
                    >Copyright 2023 - BarterCapital Todos los derechos reservados</h2>
                </div>

                <div className="justify-start items-center">
                    <h2>
                        <p className="font-black text-2xl">Redes sociales</p>
                    </h2>

                    <h2 className="flex justify-center gap-3  mb-2  ">
                        <AiFillFacebook className="text-3xl" />

                        <p className="text-center text-xl font-black">
                            <a href="https://www.facebook.com/BarterCapital-100101632425227">
                                Facebook
                            </a>
                        </p>
                    </h2>
                    <h2 className="flex justify-center gap-3  mb-2  ">
                        < AiFillTwitterCircle
                             className="text-3xl" />

                        <p className="text-center text-xl font-black">
                            <a href="https://www.facebook.com/BarterCapital-100101632425227">
                                Twitter
                            </a>
                        </p>
                    </h2>
                    <h2 className="flex justify-center gap-3  mb-2  ">
                        <AiFillFacebook className="text-3xl" />

                        <p className="text-center text-xl font-black">
                            <a href="https://www.facebook.com/BarterCapital-100101632425227">
                                Facebook
                            </a>
                        </p>
                    </h2>
                    <h2 className="flex justify-center gap-3  mb-2  ">
                        <AiFillFacebook className="text-3xl" />

                        <p className="text-center text-xl font-black">
                            <a href="https://www.facebook.com/BarterCapital-100101632425227">
                                Facebook
                            </a>
                        </p>
                    </h2>
                </div>

                <div>
                    <h2>
                        <p className="font-black">Contacto</p>
                    </h2>
                    <h2>
                        <p className="text-center">
                            <a href="https://www.instagram.com/bartercapital/">WhatsApp</a>
                        </p>
                    </h2>
                    <h2>
                        <p className="text-center">
                            <a href="https://www.instagram.com/bartercapital/">Soporte</a>
                        </p>
                    </h2>
                    <h2>
                        <p className="text-center">
                            <a href="https://www.instagram.com/bartercapital/">
                                Correo Electronico
                            </a>
                        </p>
                    </h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
