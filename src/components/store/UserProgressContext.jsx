import { createContext } from "react";
const UserProgressContext = createContext({
    progress: "",
    showCart: () => { },
    hideCart: () => { },
    showCart: () => { },
    hideCheckOut: () => { },
});

export default UserProgressContext ;