import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Footer";


export default function Root(){
    const data = useLoaderData();
    // console.log(data);
    
    return(
        <>
        <header>
            <Navbar data = {data}/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    )
}