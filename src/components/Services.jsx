import monitor from "../assets/monitor.jpg";

const Services = () => {
    return (
        <>
            <div>
                <h2 className="text-center text-2xl font-black uppercase text-blue-900">
                    Servicios
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10 rounded">
                <article className="bg-blue-800 rounded-lg shadow-xl text-white">
                    <div className="w-full">
                        <img src={monitor} alt="monitor" className="w-full" />
                    </div>

                    <h1 className="mt-4 text-2xl font-black uppercase">
                        Red de mercadeo
                    </h1>
                    <h2>Nuestros socios</h2>

                    <button className="bg-white hover:bg-blue-600 text-blue-900 hover:text-white m-4 font-bold py-2 px-4 rounded transition duration-500 ease-in-out">
                        <a href="#">Ver mas</a>
                    </button>
                </article>
                <article className="bg-blue-800 rounded-lg shadow-xl text-white">
                    <div className="w-full">
                        <img src={monitor} alt="monitor" className="w-full" />
                    </div>

                    <h1 className="mt-4 text-2xl font-black uppercase">Publicidad</h1>
                    <h2>Marketing digital en todas nuestras plataformas</h2>

                    <button className="bg-white hover:bg-blue-600 text-blue-900 hover:text-white m-4 font-bold py-2 px-4 rounded transition duration-500 ease-in-out">
                        <a href="#">Ver mas</a>
                    </button>
                </article>
                <article className="bg-blue-800 rounded-lg shadow-xl  text-white">
                    <div className="w-full">
                        <img src={monitor} alt="monitor" className="w-full" />
                    </div>

                    <h1 className="mt-4 text-2xl font-black uppercase">Streaming</h1>
                    <h2>Señal Streaming en toda latinoamerica</h2>

                    <button className="bg-white hover:bg-blue-600 text-blue-900 hover:text-white m-4 font-bold py-2 px-4 rounded transition duration-500 ease-in-out">
                        <a href="#">Ver mas</a>
                    </button>
                </article>
            </div>
            <button className="mb-10 font-black text-blue-900">
                <a href="#">Ver todos los servicios {">"}</a>
            </button>
        </>
    );
};

export default Services;
