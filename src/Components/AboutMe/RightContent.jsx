import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import Info from "./Info";
import Snippets from ".././Snippets";
import { SiJavascript } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import LinesNumber from "./LinesNumber";
import { IconContext } from "react-icons";
const RightContent = () => {
  const { data } = useSelector((store) => store.app);
  return (
    <Wrapper>
   
    
      <div className="top-section">
        <p>
          {data.text} <AiOutlineClose />
        </p>
      </div>
      <div className="bottom-section ">
        <LinesNumber />
        <Info />
        {/* <Snippets className="" /> */}
        <div className="skill-section">

        <h3>Skills:</h3>
        <IconContext.Provider value={{ color:"white", size:"2em" }}>
        <div className="skill-container skill-html">
            <MdOutlineWeb />
            <h3>Html/Css</h3>
        </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color:"#FFE17B", size:"2em" }}>
        <div className="skill-container skill-js">
            <SiJavascript />
            <h3>JavaScript</h3>
        </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color:"#45CFDD", size:"2em" }}>
        <div className="skill-container skill-react">
            <SiReact />
            <h3>React.js</h3>
        </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color:"#7A9D54", size:"2em" }}>
        <div className="skill-container skill-node">
            <SiNodedotjs />
            <h3>Node.js</h3>
        </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color:"#1D5D9B", size:"2em" }}>
        <div className="skill-container skill-py">
            <SiPython />
            <h3>Python</h3>
        </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color:"#61677A", size:"2em" }}>
        <div className="skill-container skill-c">
            <TbBrandCpp />
            <h3>C/C++</h3>
        </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color:"#539165", size:"2em" }}>
        <div className="skill-container skill-db">
            <BsDatabaseFillCheck />
            <h3>MongoDB/MySQL</h3>
        </div>
        </IconContext.Provider>

        </div>

      </div>
     
    </Wrapper>
  );
};
export default RightContent;
const Wrapper = styled.section`
  flex: 1;

  .top-section {
    border-bottom: 1px solid var(--border);
    p {
      position: relative;
      margin: 0;
      font-size: 15px;
      font-weight: 100;
      color: var(--main-color-2);
      padding: 9px;
      padding-right: 40px;
      display: inline-block;
      border-right: 1px solid var(--border);
    }
    svg {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .bottom-section {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .skill-section{
    width:400px
  }
  .skill-section > .skill-container{
    display: flex;
    align-items: center;
    padding: 0px 20px;
    margin:10px;
    border: 2px solid #43d9ad;
    border-radius: 1em;

  }
  .skill-section > .skill-container > h3{
       display:inline;
       margin-left: 20px;
        color: white;
  }
  .skill-section > .skill-container:hover{
    box-shadow: 1px 1px 5px 2px #43d9ad;
  }
  @media (max-width: 1000px) {
    width: 100%;
    overflow: scroll;
    .top-section {
      display: none;
    }
    .bottom-section {
      display: flex;
      /* overflow: scroll; */
      height: auto;
      flex-direction: column;
      width: 100%;
      p {
        width: 100%;
      }
    }
  }
  @media (max-width: 410px) {
    .skill-section{
      width:360px
    }
  }
`;
