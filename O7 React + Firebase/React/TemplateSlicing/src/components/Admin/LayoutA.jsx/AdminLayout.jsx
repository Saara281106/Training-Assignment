import { Outlet } from "react-router-dom"
import HeaderA from "./HeaderA"
import FooterA from "./FooterA"

export default function AdminLayout(){
    return(
        <>
        <HeaderA></HeaderA>
        <Outlet></Outlet>
        <FooterA></FooterA>
        </>
    )
}