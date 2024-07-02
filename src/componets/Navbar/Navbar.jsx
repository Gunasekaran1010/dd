import './navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>

        <div className="container">
            <motion.div className="logoNavbar"
            animate={{ rotate: 360 }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 5, 
                ease: "linear",}}
            >
                <img src="./atom.png" alt="" height="70px" width="70px"/>
            </motion.div>
            <div className="linksNavbar">

                <h2><a href="">Home</a></h2>
                
                <h2><a href="">About Me</a></h2>
                
                <h2><a href="">Skills</a></h2>
                
                <h2><a href="">Projects</a></h2>
                
              <button><a href="">Contact ME</a></button>


            </div>
        </div>


    </div>
  )
}

export default Navbar