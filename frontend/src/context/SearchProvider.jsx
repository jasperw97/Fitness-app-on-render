import { createContext, useState } from "react";

const SearchContext = createContext()
export default SearchContext

export const SearchProvider = ({children}) => {
    let [query, setQuery] = useState("")
    return(
        <SearchContext.Provider value={{query, setQuery}}>
            {children}
        </SearchContext.Provider>
    )
}