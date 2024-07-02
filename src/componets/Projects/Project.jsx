import { useState } from 'react';
import './project.scss';

const Project = () => {
    const [activeModal, setActiveModal] = useState(null);

    const toggleModal = (modalName) => {
        setActiveModal(activeModal === modalName ? null : modalName);
    };

    if (activeModal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <div className='project'>
            <div className="container">
                <div className="protitle">
                    <h1>Recent Projects</h1>
                    <span>Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</span>
                </div>

                <div className="projectdeatils">
                    <div className="box">
                        <div className="tittle">
                            <h1>Java Project</h1>
                            <span>Full Backend Project with Help Of Spring Boot</span>
                        </div>
                        <div className="img">
                            <img src="./4.png" alt="Java Project" height="300px" width="300px" />
                        </div>
                        <div className="btn">
                            <button onClick={() => toggleModal('java')} className='btns btn-modal'>See Demo</button>
                        </div>
                    </div>

                    <div className="box">
                        <div className="tittle">
                            <h1>React Project</h1>
                            <span>Full Backend Project with Help Of Spring Boot</span>
                        </div>
                        <div className="img">
                            <img src="./4.png" alt="React Project" height="300px" width="300px" />
                        </div>
                        <div className="btn">
                            <button onClick={() => toggleModal('react')} className='btns btn-modal'>See Demo</button>
                        </div>
                    </div>

                    <div className="box">
                        <div className="tittle">
                            <h1>FullStack Project</h1>
                            <span>Full Backend Project with Help Of Spring Boot</span>
                        </div>
                        <div className="img">
                            <img src="./4.png" alt="FullStack Project" height="300px" width="300px" />
                        </div>
                        <div className="btn">
                            <button onClick={() => toggleModal('fullstack')} className='btns btn-modal'>See Demo</button>
                        </div>
                    </div>
                </div>
            </div>

            {activeModal === 'java' && (
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <h2>Java Project</h2>
                            <p>Details about the Java Project. This project uses Spring Boot for the backend.</p>
                            <button className="close-modal" onClick={() => toggleModal(null)}>Close</button>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'react' && (
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <h2>React Project</h2>
                            <p>Details about the React Project. This project uses Spring Boot for the backend.

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem earum inventore sint quia quae incidunt veniam consectetur molestias, ducimus laboriosam tenetur totam, aliquid neque voluptas asperiores similique impedit ut.
                            </p>
                            <button className="close-modal" onClick={() => toggleModal(null)}>Close</button>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'fullstack' && (
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <h2>FullStack Project</h2>
                            <p>Details about the FullStack Project. This project uses Spring Boot for the backend.</p>
                            <button className="close-modal" onClick={() => toggleModal(null)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;
