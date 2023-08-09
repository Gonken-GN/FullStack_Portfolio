import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { AppWrap,MotionWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillquery = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      setExperience(data);
    });
    client.fetch(skillquery).then((data) => {
      setSkill(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skill?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
                <p className="p-text">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {console.log(experience)}
          {experience?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      key={work.name}
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      <Tooltip
                        id={work.name}
                        effect="solid"
                        arrowColor="#edf2f8"
                        className="skills-tooltip"
                      >
                        {work.desc}
                      </Tooltip>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', "app__whitebg");
