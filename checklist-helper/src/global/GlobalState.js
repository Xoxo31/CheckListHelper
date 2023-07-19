import React from "react";
import GlobalStateContext from "./GlobalStateContext";


export const GlobalState = (props) => {
    const [myText, setMyText] = React.useState("");

    return <GlobalStateContext.Provider
    value={{ myText, setMyText 
    }}>
    {props.children}
</GlobalStateContext.Provider>
}