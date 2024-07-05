import styles from './ProjectsSyle.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import ProjectCard from '../../Common/ProjectCard'
function Project() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
              src={viberr} 
              link="https://github.com/DesirArman007/todoApp" 
              h3="Viberr"
              p="React Todo App"
            />
            <ProjectCard 
              src={freshBurger} 
              link="https://github.com/DesirArman007/megaBlog" 
              h3="freshBurger"
              p="React Blog App"
            />
        </div>
    </section>
  )
}

export default Project