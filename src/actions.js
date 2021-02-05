export const inc = () => ({type: "INC"});
export const dec = () => ({type: "DEC"});
export const rnd = () => {
    return {
        type: "RND",
        value: Math.floor(Math.random() * (Math.random() > 0.5 ? 10 : -10))
    };
};