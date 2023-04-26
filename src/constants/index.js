export const brands = [
    { id: 1, name: "European" },
    { id: 2, name: "American" },
    { id: 3, name: "Asiatic" },
];

const YEARMAX = new Date().getFullYear();

export const Years = Array.from(new Array(20), (val, index) => YEARMAX - index);


export const plans = [
    { id: 1, name: "Basic" },
    { id: 2, name: "Full" },
    { id: 3, name: "Premium" },
];
