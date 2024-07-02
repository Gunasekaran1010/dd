
import "./hero.scss";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import arrow from '../../arrow.json';
import car from '../../animation.json';
import Lottie from "lottie-react";

const Hero = () => {
    const [ text ] = useTypewriter({
        words: [ 'Gunasekaran' ,'Web Developer', 'Java Developer'],
        loop: {},
        typeSpeed : 100,
        delaySpeed : 40
    });

    return (
        <div className="hero">
            <div className="arrowbtn">
                <Lottie animationData={arrow}  className="arrow"/>

                </div>
{/* 
           <div className="cars">
            <Lottie animationData={car}  className="car" />
           </div> */}
            <div className="container">
                
                <div className="leftContainer">
                    <h1 >
                        Hey! I'm
                    </h1>
                    <h1> <span >{text}</span>
                        <Cursor />
                    </h1>
            
                    <h2>
                        Obviously I'm a Web Developer. Java Developer with Spring Framework experience.<br />
                        Experienced with all stages of the development.
                    </h2>
                    <div className="contbtt">
                        <button><a href="">See Projects</a></button>
                        <button className="ctbtn"><a href="">Contact</a></button>
                    </div>
                </div>
                <div className="rightContainer">
                    <img src="./hero.png" alt="Hero" />
                </div>

                <div className="arrow">

                </div>


             
            </div>

           
        </div>
    );
}

export default Hero;
