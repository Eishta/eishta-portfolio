import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const SkillContent = ({ skills }) => {
  return (
    <div className="skills__content">
      {skills.map((skill, i) => (
        <article className="skills__details">
          <BsPatchCheckFill className="skills__icon" />
          <div>
            <h4>{skill}</h4>
            {/* <small className='text-light'>skills</small> */}
          </div>
        </article>
      ))}
    </div>
  );
};

const Skills = () => {
  const skills = useSelector((state) => state.detail?.skills || {});
  return (
    <section id="skills">
      <h5>What skills I have</h5>
      <h2>My Skills</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Languages</h3>
          <SkillContent skills={skills.languages || []} />
        </div>
        <div className="skills__backend">
          <h3>Tools</h3>
          <SkillContent skills={skills.tools || []} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
