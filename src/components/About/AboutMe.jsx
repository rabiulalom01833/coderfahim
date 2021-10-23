import React from 'react'

const AboutMe = () => {
    return (
        <div className="aboutMe-content pt-4">
            <p>
                My name is Fahim, I'm 22 years old, I live in Gurgaon. I am Currently studding at an university. 
                I've also been studying a lot on my own to learn new technologies and skills
            </p>
            <p>
                I Stated as a Front-End Developer in 2017. Since then I have been dedicating about 8hrs a day to studies.
                I see that I am on the right path because I see th result that dedicates bours bring.
            </p>
            <ul className="d-flex gap-3 pt-lg-5">
                <li><a href="#" className="theme-btn btn-md">Download CV</a></li>
                <li><a href="#" className="theme-btn btn-md">My Works</a></li>
            </ul>
        </div>
    )
}

export default AboutMe
