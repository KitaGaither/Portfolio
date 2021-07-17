import React, { Component } from 'react';
import meglasses from '../assets/images/meglasses.png';

class AboutMe extends Component {
    render() {
        return(
            <div className="about-me text-center">
                <h1>
                    About Me 
                </h1>
                <img
                src={meglasses}
                alt="lakita gaither"
                className="about-avatar"
                />
                <p>
                I'm a US Navy Veteran and I have over 10yrs of interpersonal experience. I will have my Front-End Web Development Certification in August, and my Full-stack(MERN stack) Web/ Mobile Development certification in September from Nucamp Coding Bootcamp. I also have a background in Graphic and Web design(Senior year). I currently work as an IT Business Analyst so I also have Tier-1 IT experience as well as basic A+ knowledge and business acumen.

                </p>
            </div>
        );
    }
}
export default AboutMe;