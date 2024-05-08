import React, { useState } from 'react';
import styles from './skils.module.scss';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleSkillHover = (skillName: any) => {
    setHoveredSkill(skillName);
  };

  const resetSkillHover = () => {
    setHoveredSkill(null);
  };

  return (
    <div className={styles.principal}>
      <h1 className={styles.container__h1}>Skills:</h1>
      <div className={styles.container}>
      <div
        className={styles.skillCard}
        onMouseEnter={() => handleSkillHover('Java')}
        onMouseLeave={resetSkillHover}
        >
        {hoveredSkill === 'Java' ? (
            <p className={styles.skillText}>Java</p>
        ) : (
            <i className={`fab fa-java ${styles.icon} ${styles.slideRight}`}></i>
        )}
        </div>

        <div
          className={styles.skillCard}
          onMouseEnter={() => handleSkillHover('NodeJs')}
          onMouseLeave={resetSkillHover}
        >
          {hoveredSkill === 'NodeJs' ? (
            <p className={styles.skillText}>NodeJs</p>
          ) : (
            <i className={`fab fa-node-js ${styles.icon} ${styles.slideRight}`}></i>
          )}
        </div>

        <div
          className={styles.skillCard}
          onMouseEnter={() => handleSkillHover('Banco de Dados')}
          onMouseLeave={resetSkillHover}
        >
          {hoveredSkill === 'Banco de Dados' ? (
            <p className={styles.skillText}>Banco de Dados</p>
          ) : (
            <i className={`fas fa-database ${styles.icon} ${styles.slideRight}`}></i>
          )}
        </div>

        <div
          className={styles.skillCard}
          onMouseEnter={() => handleSkillHover('Linux')}
          onMouseLeave={resetSkillHover}
        >
          {hoveredSkill === 'Linux' ? (
            <p className={styles.skillText}>Linux</p>
          ) : (
            <i className={`fab fa-ubuntu ${styles.icon} ${styles.slideRight}`}></i>
          )}
        </div>

        <div
          className={styles.skillCard}
          onMouseEnter={() => handleSkillHover('React')}
          onMouseLeave={resetSkillHover}
        >
          {hoveredSkill === 'React' ? (
            <p className={styles.skillText}>React</p>
          ) : (
            <i className={`fab fa-react ${styles.icon} ${styles.slideRight}`}></i>
          )}
        </div>

        <div
          className={styles.skillCard}
          onMouseEnter={() => handleSkillHover('Angular')}
          onMouseLeave={resetSkillHover}
        >
          {hoveredSkill === 'Angular' ? (
            <p className={styles.skillText}>Angular</p>
          ) : (
            <i className={`fab fa-angular ${styles.icon} ${styles.slideRight}`}></i>
          )}
        </div>

        <div
          className={styles.skillCard}
          onMouseEnter={() => handleSkillHover('Docker')}
          onMouseLeave={resetSkillHover}
        >
          {hoveredSkill === 'Docker' ? (
            <p className={styles.skillText}>Docker</p>
          ) : (
            <i className={`fab fa-docker ${styles.icon} ${styles.slideRight}`}></i>
          )}
        </div>
        

        <div
          className={styles.skillCard}
          onMouseEnter={() => handleSkillHover('AWS')}
          onMouseLeave={resetSkillHover}
        >
          {hoveredSkill === 'AWS' ? (
            <p className={styles.skillText}>AWS</p>
          ) : (
            <i className={`fab fa-aws ${styles.icon} ${styles.slideRight}`}></i>
          )}
        </div>

        <div
          className={styles.skillCard}
          onMouseEnter={() => handleSkillHover('GitHub')}
          onMouseLeave={resetSkillHover}
        >
          {hoveredSkill === 'GitHub' ? (
            <p className={styles.skillText}>GitHub</p>
          ) : (
            <i className={`fab fa-github ${styles.icon} ${styles.slideRight}`}></i>
          )}
        </div>

      </div>
    </div>
  );
};

export default Skills;
