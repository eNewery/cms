"use client"
import { useEffect, useState, useRef } from "react"

export default function Footer() {
    const [activePanel, setActivePanel] = useState(null)
    const [panelContent, setPanelContent] = useState(null)
    const [isClosing, setIsClosing] = useState(false)


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

    return (
        <div className="footerContainer">
            {activePanel && (
                <div className={`footerAside ${isClosing ? "asideClosing" : ""}`}>
                    {panelContent === "category" && <div className="footerAsideButtons"><button>Language Dashboard</button><button>Category Dashboard</button><button>Question Dashboard</button></div>}
                    {panelContent === "categoryadd" && <div className="footerAsideButtons"><button>Create Language</button><button>Create Category</button><button>Make a Question</button></div>}
                    {panelContent === "profile" && <div className="footerAsideButtons"><button>Profile</button><button>Account Settings</button><button>Log Out</button></div>}
                </div>
            )}
            <div className="footerContent">
                <button className="footerBtn">
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
