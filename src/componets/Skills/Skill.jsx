
import './skill.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCoffee, faFilm, faMusic, faPaintBrush, faBook, faGamepad, faMobileAlt, faPencilRuler, faRunning, faCog } from '@fortawesome/free-solid-svg-icons';

// const hobbies = [
//   { icon: <FontAwesomeIcon icon={faCode} />, text: 'Developing' },
//   { icon: <FontAwesomeIcon icon={faCoffee} />, text: 'Coffee' },
//   { icon: <FontAwesomeIcon icon={faFilm} />, text: 'Cinema' },
//   { icon: <FontAwesomeIcon icon={faMusic} />, text: 'Music' },
//   { icon: <FontAwesomeIcon icon={faPaintBrush} />, text: 'Painting' },
//   { icon: <FontAwesomeIcon icon={faBook} />, text: 'Reading' },
//   { icon: <FontAwesomeIcon icon={faGamepad} />, text: 'Games' },
//   { icon: <FontAwesomeIcon icon={faMobileAlt} />, text: 'Android' },
//   { icon: <FontAwesomeIcon icon={faPencilRuler} />, text: 'Designing' },
//   { icon: <FontAwesomeIcon icon={faRunning} />, text: 'Sports' },
//   { icon: <FontAwesomeIcon icon={faCog} />, text: 'Other Activity' },
// ];

// const HobbyItem = ({ icon, text }) => {
//     return (
//       <div className="hobby-item">
//         <div className="elements">
//         <div className="icon">{icon}</div>
//         <div className="text">{text}</div>

//         </div>
        
//       </div>
//     );
//   };




const Skill = () => {
  return (
    <div className='skill'>
      <div className="conatiner">
        <div className="skilltitle">
          <h1>Hobbies & Skills</h1>
          <h2>I am a fresher in web and Java development, aiming to <br /> gain comprehensive experience across all development stages</h2>
        </div>

        <div className="skillsicons">
         {/* {hobbies.map((hobby, index) => (
            <HobbyItem key={index} icon={hobby.icon} text={hobby.text} />
          ))} */}


          <div className="frontendicons">
            <h1>Frontend  Devlopment</h1>

            <div className="skillconatin">

            <div className="skilllist">

              <div className="icon">
                <img src="./mark.png" alt="" />
              </div>
              <div className="skillname">
                <h1>HTML</h1>
                <h3>Experienced</h3>
              </div>

              </div>

              <div className="skilllist">

              <div className="icon">
                <img src="./mark.png" alt="" />
              </div>
              <div className="skillname">
                <h1>CSS</h1>
                <h3>Experienced</h3>
              </div>
              
            </div>

            <div className="skilllist">

<div className="icon">
  <img src="./mark.png" alt="" />
</div>
<div className="skillname">
  <h1>SASS</h1>
  <h3>Experienced</h3>
</div>

</div>


<div className="skilllist">

<div className="icon">
  <img src="./mark.png" alt="" />
</div>
<div className="skillname">
  <h1>JavaScript</h1>
  <h3>Experienced</h3>
</div>

</div>

<div className="skilllist">

<div className="icon">
  <img src="./mark.png" alt="" />
</div>
<div className="skillname">
  <h1>React Js</h1>
  <h3>Experienced</h3>
</div>

</div>

<div className="skilllist">

<div className="icon">
  <img src="./mark.png" alt="" />
</div>
<div className="skillname">
  <h1>Angular js</h1>
  <h3>Basic</h3>
</div>

</div>

</div>

          </div>

          <div className="backendicons">

          <h1>Backend  Devlopment</h1>

<div className="skillconatin">

          <div className="skilllist">

<div className="icon">
  <img src="./mark.png" alt="" />
</div>
<div className="skillname">
  <h1>JAVA</h1>
  <h3>Experienced</h3>
</div>

</div>

<div className="skilllist">

<div className="icon">
  <img src="./mark.png" alt="" />
</div>
<div className="skillname">
  <h1>Spring Boot</h1>
  <h3>Experienced</h3>
</div>

</div>

<div className="skilllist">

<div className="icon">
<img src="./mark.png" alt="" />
</div>
<div className="skillname">
<h1>MySql</h1>
<h3>Experienced</h3>
</div>

</div>


<div className="skilllist">

<div className="icon">
<img src="./mark.png" alt="" />
</div>
<div className="skillname">
<h1>WebSockets</h1>
<h3>Experienced</h3>
</div>

</div>

<div className="skilllist">

<div className="icon">
<img src="./mark.png" alt="" />
</div>
<div className="skillname">
<h1>REST APIs</h1>
<h3>Experienced</h3>
</div>

</div>

<div className="skilllist">

<div className="icon">
<img src="./mark.png" alt="" />
</div>
<div className="skillname">
<h1>AWS</h1>
<h3>Basic</h3>
</div>

</div>
</div>
            
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Skill;
