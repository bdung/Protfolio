import React from "react";
import Frontend from './frontend';
import Design from './design';
import "./skill.css"
import Backend from './design';


const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Design />
            </div>
        </section>
    )
}
export default Skills;