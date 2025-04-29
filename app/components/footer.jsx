"use client"
import { useEffect, useState, useRef } from "react"
import { useUser } from "./context";

export default function Footer() {
    const [activePanel, setActivePanel] = useState(null)
    const [panelContent, setPanelContent] = useState(null)
    const [isClosing, setIsClosing] = useState(false)
    const {setPage, isModal, setIsModal, modalContent, setModalContent} = useUser()


    function togglePanel(panelName) {
        const footerAside = document.querySelector(".footerAside")
        if (activePanel === panelName) {
            setIsClosing(true)
footerAside.style.animation = "asideClosed 0.3s both"
            setTimeout(() => {
                setActivePanel(null)
                setIsClosing(false)
                setPanelContent(null)
            }, 300) // duración de la animación
        } else {
            setActivePanel(panelName)
            setPanelContent(panelName)
        }
    }
function setModal(modalCont) {
    setIsModal(true)
    setModalContent(modalCont)
}
    return (
        <div className="footerContainer">
            {activePanel && (
                <div className={`footerAside ${isClosing ? "asideClosing" : ""}`}>
                    {panelContent === "category" && <div className="footerAsideButtons"><button onClick={() => setPage("Language")}>Language Dashboard</button><button onClick={() => setPage("Category")}>Category Dashboard</button><button onClick={() => setPage("Question")}>Question Dashboard</button></div>}
                    {panelContent === "categoryadd" && <div className="footerAsideButtons"><button onClick={() => setModal("languageM")}>Create Language</button><button onClick={() => setModal("categoryM")}>Create Category</button><button onClick={() => setModal("questionM")}>Make a Question</button></div>}
                    {panelContent === "profile" && <div className="footerAsideButtons"><button onClick={() => setPage("Profile")}>Profile</button><button>Account Settings</button><button>Log Out</button></div>}
                </div>
            )}
            <div className="footerContent">
                <button onClick={() => setPage("Dashboard")} className="footerBtn">
                    <img src="./home.png" alt="" />
                </button>
                <button className={`footerBtn ${activePanel === "category" ? "active" : ""}`} onClick={() => togglePanel("category")}>
    <img src="./category.png" alt="" />
</button>
<button className={`footerBtn ${activePanel === "categoryadd" ? "active" : ""}`} onClick={() => togglePanel("categoryadd")}>
    <img src="./categoryadd.png" alt="" />
</button>
<button className={`footerBtn ${activePanel === "profile" ? "active" : ""}`} onClick={() => togglePanel("profile")}>
    <img src="./profile.png" alt="" />
</button>

            </div>
        </div>
    )
}
