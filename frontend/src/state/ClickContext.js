import { createContext, useContext, useState, useRef } from "react";


const ClickContext = createContext();

export function useClickContext() {
    return useContext(ClickContext);
}

export function Clickcontextprovider({ children }) {

    const [dataInfo, setDataInfo] = useState("");
    const [modalMenu, setModalMenu] = useState(false);
    const topRef = useRef(null);
    const aboutRef = useRef(null);
    const profileRef = useRef(null);
    const worksRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <ClickContext.Provider value={{ dataInfo, setDataInfo, topRef, aboutRef, profileRef, worksRef, contactRef, modalMenu, setModalMenu }}>
            {children}
        </ClickContext.Provider>
    )
}