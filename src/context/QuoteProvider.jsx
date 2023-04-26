import { useState, createContext } from "react";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
    const [modal, setModal] = useState(false);

    return (
        <QuoteContext.Provider
            value={{
                modal,
                setModal,
            }}
        >
            {children}
        </QuoteContext.Provider>
    );
};
export { QuoteProvider };

export default QuoteContext;
