import logo from "../assets/logo.webp";
import {
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillInstagram,
    AiOutlineWhatsApp,
    AiOutlineUser,
    AiOutlineMail,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
                <div className="flex flex-col items-center">
                    <img src={logo} alt="logo" className="w-40" />
                    <h2 className="text-xl">
                        Copyright 2023 - BarterCapital Todos los derechos reservados
                    </h2>
                </div>

                <div className="grid grid-rows-4">
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
                        <AiFillTwitterCircle className="text-3xl" />

                        <p className="text-center text-xl font-black">
                            <a href="https://www.facebook.com/BarterCapital-100101632425227">
                                Twitter
                            </a>
                        </p>
                    </h2>
                    <h2 className="flex justify-center gap-3  mb-2  ">
                        <AiFillInstagram className="text-3xl" />

                        <p className="text-center text-xl font-black">
                            <a href="https://www.facebook.com/BarterCapital-100101632425227">
                                Instagram
                            </a>
                        </p>
                    </h2>
                    <h2 className="flex justify-center gap-3  mb-2  ">
                        <BsDiscord className="text-3xl" />

                        <p className="text-center text-xl font-black">
                            <a href="https://www.facebook.com/BarterCapital-100101632425227">
                                Discord
                            </a>
                        </p>
                    </h2>
                </div>

                <div>
                    <h2>
                        <p className="font-black text-2xl">Contacto</p>
                    </h2>
                    <h2 className="flex justify-center gap-3  mb-2  ">
                        <AiOutlineWhatsApp className="text-3xl" />

                        <p className="text-center text-xl font-black">
                            <a href="https://www.facebook.com/BarterCapital-100101632425227">
                                WhatsApp
                            </a>
                        </p>
                    </h2>
                    <h2 className="flex justify-center gap-3  mb-2  ">
                        <AiOutlineUser className="text-3xl" />

                        <p className="text-center text-xl font-black">
                            <a href="https://www.facebook.com/BarterCapital-100101632425227">
                                Soporte
                            </a>
                        </p>
                    </h2>
                    <h2 className="flex justify-center gap-3  mb-2  ">
                        <AiOutlineMail className="text-3xl" />

                        <p className="text-center text-xl font-black">
                            <a href="https://www.facebook.com/BarterCapital-100101632425227">
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
