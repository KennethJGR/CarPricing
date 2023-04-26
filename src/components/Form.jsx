import { brands, Years, plans } from "../constants";
import { Fragment,useContext } from "react";
import QuoteContext from "../context/QuoteProvider";

const Form = () => {

    const { modal, setModal } = useContext(QuoteContext);
console.log(modal);


    return (
        <>
            <button
            className="text-gray-950"
            onClick={() => setModal(!modal)}
            >
                 Modal
            </button>

            <form>
                {/* Brand for the car */}
                    <label
                        className="block text-gray-700 uppercase text-sm font-bold mb-3"
                        htmlFor="brand"
                    >
                        Brand
                    </label>

                    <select
                        name="brand"
                        id="brand"
                        className="w-full p-3 bg-white border border-gray-200 text-gray-400"
                    >
                        <option value="">-- Select Brand --</option>

                        {brands.map((brand) => (
                            <option key={brand.id} value={brand.id}>
                                {brand.name}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Year for the car */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 uppercase text-sm font-bold mb-3"
                        htmlFor="brand"
                    >
                        Year
                    </label>

                    <select
                        name="brand"
                        id="brand"
                        className="w-full p-3 bg-white border border-gray-200 text-gray-400"
                    >
                        <option value="">-- Select Year --</option>

                        {Years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Plans for the car */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 uppercase text-sm font-bold mb-3"
                        htmlFor="brand"
                    >
                        Choose a Plan
                    </label>

                    <div className="flex gap-3 text-gray-600 items-center">
                        {plans.map((plan) => (
                            <Fragment key={plan.id}>
                                <label htmlFor="name">{plan.name}</label>
                                <input
                                    type="radio"
                                    name="plan"
                                    id={plan.id}
                                    value={plan.id}
                                    className="mr-2"
                                />
                            </Fragment>
                        ))}
                    </div>
                    </div>
                <input
                    type="submit"
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white uppercase font-bold py-3 px-4 rounded mt-3 cursor-pointer"
                    value="Get Quote"
                />
            </form>
        </>
    );
};

export default Form;
