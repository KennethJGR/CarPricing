const Testimonio = () => {
    return (
        <>
            <div>
                <h2 className="text-center text-white text-3xl font-black uppercase pt-6">
                    Testimonio de clientes
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
                <article
                    className="bg-white rounded-lg shadow-xl p-10
                    text-blue-900
                    "
                >
                    <h2>
                        <p className="font-black">Jarov Davila</p>
                    </h2>
                    <h2>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                            consequatur, totam quas sed repudiandae ratione debitis itaque est
                            voluptatibus cupiditate mollitia deserunt doloribus
                            necessitatibus.
                        </p>
                    </h2>
                </article>
                <article
                    className="bg-white rounded-lg shadow-xl p-10
                    text-blue-900
                    "
                >
                    <h2>
                        <p className="font-black">Dalia Sanchez</p>
                    </h2>
                    <h2>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                            consequatur, totam quas sed repudiandae ratione debitis itaque est
                            voluptatibus cupiditate mollitia deserunt doloribus
                            necessitatibus.
                        </p>
                    </h2>
                </article>
                <article
                    className="bg-white rounded-lg shadow-xl p-10
                    text-blue-900
                    "
                >
                    <h2>
                        <p className="font-black">Lizzete Larios</p>
                    </h2>
                    <h2>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                            consequatur, totam quas sed repudiandae ratione debitis itaque est
                            voluptatibus cupiditate mollitia deserunt doloribus
                            necessitatibus.
                        </p>
                    </h2>
                </article>
            </div>
        </>
    );
};

export default Testimonio;
