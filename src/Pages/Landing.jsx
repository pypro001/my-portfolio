import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../Features/app/appSlice";


const Landing = () => {
  const dispatch = useDispatch();
  const { activePage } = useSelector((store) => store.app);
  useEffect(() => {
    dispatch(changePage("landing"));
  }, []);
  return (
    <Wrapper className="landing">
      <div className="gap"></div>
      <div className="text">
        <div className="top">
          <p className="hello">Hello 😀, I am</p>
          <h1 className="dev_name">Vivek Maurya</h1>
          <h1 className="light">
            <span className="purple mob"> {">"}</span>
            <div className="content__container purple mob">
              <ul className="content__container__list">
                <li className="content__container__list__item">Front-End&nbsp;</li>
                <li className="content__container__list__item">Back-End</li>
                <li className="content__container__list__item">Node.js</li>
                <li className="content__container__list__item">React.js</li>
              </ul> 
              </div>
              <span className="purple mob">developer</span>
          </h1>
        </div>
        <div className="bottom">
          <p className="gray">// Hope you are doing great :{")"}</p>
          <p className="gray">// find my portfolio on Github.</p>
          <a href="https://github.com/pypro001"  target="_blank">
          <p className="github-link">
            <span className="purple">const</span>{" "}
            <span className="green">github</span> ={" "}
            <span className="skin">"https://github.com/pypro001"</span>
          </p>
          </a>
        </div>
      </div>
      <div className="css-blurry-gradient-blue gradient-bg"></div>
      <div className="css-blurry-gradient-green gradient-bg"></div>

    </Wrapper>



  );
};
export default Landing;
const Wrapper = styled.main`

.css-blurry-gradient-green {
  background: radial-gradient(circle at 50% 50%,#43d9ad,rgba(76,0,255,0));
  border-radius: 100% 0 0;
  filter: blur(100px);
  height: 400px;
  opacity: .5;
position: absolute;
  right: 35%;
  rotate: 20deg;
  top: 10%;
  width: 400px;

}
.css-blurry-gradient-blue {
  background: radial-gradient(circle at 50% 50%,#4d5bce,rgba(76,0,255,0));
  border-radius: 100% 50% 100% 0;
  bottom: 10%;
  height: 500px;
  opacity: .7;
 position: absolute;
  right: 10%;
  width: 500px;

}
.gradient-bg{
filter: blur(70px);
height: 300px;
opacity: .5;
width: 300px;
z-index: 10;
}
.content__container{
 overflow: hidden;
  height: 40px;
  display: inline-block;
  max-width: 200px;
  margin-left: 20px;
  margin-bottom: -10px;
}
.github-link:hover{
  text-decoration: underline #e99287;
  text-underline-offset: 4px;
  cursor: pointer;
}
.content__container__list{
  
 
  animation-name: change;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}
@keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

  display: flex;
  color: white;
  margin-top: 200px;
  height: 80vh;
  width: 100%;
  .gap {
    width: 270px;
  }
  h1:first-of-type {
    font-weight: 300;
    font-size: 75px;
  }
  h1 {
    font-weight: 500;
  }

  h1 {
    padding: 0px;
    margin: 0px;
  }
  .bottom {
    margin-top: 70px;
  }
  .images img {
    position: absolute;
    left: 500px;
    top: 50px;
    z-index: 2;
    max-width: 1000px;
  }
  @media (max-width: 1000px) {
    .content__container{
      height:32px;
    }
    margin-top: 0px;
    height: 93vh;
    .gap {
      width: 20px;
    }
    .text {
      .hello {
        font-size: 22px;
        margin-top: 90px;
      }

      z-index: 100;
      h1:first-of-type {
        font-weight: 600;
        font-size: 4rem;
       line-height: 1;
       margin-bottom:20px;
      }
      h1 {
        font-size: 25px;
        font-weight: 200;
      }
      p {
        font-size: 15px;
      }
    }
    .images img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-width: 600px;
      z-index: 1;
    }
    .text .mob {
      color: #43d9ad;
    }
    .bottom {
      margin-top: 40px;
    }
  }
  
`;
