import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../Features/app/appSlice";
import Landing from "./Landing";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = ()=>{


    return (
        <div>
            <Landing />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}
export default Home;