import "./about.scss";



const About = () => {
  return (
    <div className="about">
        <div className="container">
            <div className="leftabout">

                <img src="./hero.png" alt="" />
            </div>

            <div className="rightabout">

                <h1>I'm a Passionate Web Designer</h1>
                <h2>Obviously I'm a Web Designer. Web Developer with over 7 years of <br /> experience. Experienced with all stages of the development cycle for <br /> dynamic web projects. The as opposed to using 'Content here, content here', <br /> making it look like readable English.</h2>
                <h2>I'm a professional web designer. My motive is to build a best web design with <br /> my all years of experience.</h2>
                <button className="wrkbtn"><a href="">See Work</a></button>
            </div>
        </div>
    </div>
  )
}

export default About