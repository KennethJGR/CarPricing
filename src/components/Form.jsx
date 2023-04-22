import React from "react";

const Form = () => {
    return (
        <form>
            <div className="mb-4">
                <label
                    className="block text-gray-700 uppercase text-sm font-bold mb-3"
                    htmlFor="brand"
                >
                    Brand
                </label>

                <select
                    name="brand"
                    id="brand"
                    className="w-full p-3 bg-white border border-gray-200"
                    placeholder="Brand"
                >
                    <option value="">Select a brand</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>


                </select>

                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="brand"
                    type="text"
                    placeholder="Brand"
                />
            </div>
        </form>
    );
};

export default Form;
