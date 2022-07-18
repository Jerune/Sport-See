import { useState, createContext} from "react"
import defaultData from "../services/dataModel"
const StoreContext = createContext({});

const store = {
    data : {},
    set : (data)=>{}
}

function StoreProvider({children}){
    const [get, set] = useState(defaultData);
    store.data = get;
    store.set = set;

    return(
        <StoreContext.Provider value={[get, set]} >
            {children}
        </StoreContext.Provider>
    );
}

export {StoreProvider, StoreContext, store}