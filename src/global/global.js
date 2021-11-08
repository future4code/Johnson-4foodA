import React, { useState } from "react";


export const GlobalStateContext = React.createContext()

export const GlobalState = (props) => {

    return (
        <GlobalStateContext.Provider value={{  }}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}