import { Outlet } from "react-router-dom";
import HeaderA from "./HeaderA";
import FooterA from "./FooterA";

export default function CostumerLayout(){
    return(
        
        <>
        <HeaderA></HeaderA>
        <Outlet></Outlet>
        <FooterA></FooterA>
        </>
    )
}