"use client"
import { useUser } from "./context";
export default function({pageTitle}){
    const {page} = useUser()
    return(
        <div className="pageTitleContainer"><h2>{page}</h2></div>
    )
}