import styles from './SkillStyles.module.css'
import checkMarkicon from '../../assets/checkmark-dark.svg'
import SkillList from '../../Common/SkillList';
function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkicon} skill="HTML" />
          <SkillList src={checkMarkicon} skill="Css" />
          <SkillList src={checkMarkicon} skill="JavaScript" />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkicon} skill="React" />
          <SkillList src={checkMarkicon} skill="Tailwind Css" />
        </div>
    </section>
  )
}

export default Skills;