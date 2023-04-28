import bit from "../assets/bit.png";
const Header = () => {
  return (
    <header className="">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
        <div>
            {" "}
            <h1 className="text-white text-left text-4xl font-black">
                ¡Bienvenido a Barter Capital Group!
            </h1>
            <h5
            className="text-white text-left "
            >
                Se parte de nuestra familia y podremos recorrer juntos el camino
                para crear un estilo de vida con libertad financiera.
            </h5>
            <button className="bg-blue-500 hover:bg-purple-700 text-white mt-2 font-bold py-2 px-4 rounded transition duration-500 text-xl ease-in-out">
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
  )
}

export default Header