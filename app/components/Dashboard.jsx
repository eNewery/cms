"use client"
import PageTitle from "./PageTitle";

export default function(){
    return(
        <div className="dashboardContainer">
        <h1 className="dashboardTitle">Are you interested in working with us?</h1>
        <p className="dashboardSubtitle">Crafting user interfaces with precision — from design to deployment, CMS to QMS — we specialize in transforming Figma designs into clean, responsive code, integrating seamlessly with content management systems, and maintaining high standards of quality, performance, and usability throughout the development process</p>
        <div className="dashboardBtnContainer">
            <button className="dashboardBtnBuy">Buy this Project</button><button className="dashboardBtnProj">All Projects</button>
        </div>
        <button onClick={() => alert("Not working")} className="dashboardSkipBtn">I'm not interested (not recommended)</button>
        </div>
    )
}