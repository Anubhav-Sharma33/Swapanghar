import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Footer";
import LowerNavBar from "../ProjectDetails/LowerNavBAr";


export default function Root(){
    const data = useLoaderData();
    // console.log(data);
    
    return(
        <>
        <header className='sticky top-0 z-30'>
            <Navbar data = {data}/>
        </header>
        <main>
            <Outlet context = {data}/>
        </main>
        <footer>
            <Footer/>
        </footer>
        <LowerNavBar/>
        </>
    )
}