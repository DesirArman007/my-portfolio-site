import styles from './HeroStyle.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import cv from '../../assets/cv.pdf'
import { useTheme } from '../../Common/ThemeContext'

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <>
            <section id="hero" className={styles.Container}>
                <div className={styles.colorModeContainer}>
                    <img className={styles.hero} src={heroImg} alt='Profile picture of Abhishek Yadav' />
                    <img className={styles.colorMode} src={themeIcon} alt='Color Mode' onClick={toggleTheme} />
                </div>
                <div className={styles.info}>
                    <h1>Abhishek <br /> Yadav</h1>
                    <h2>FrontEnd Developer</h2>
                    <span>
                        <a href="https://twitter.com/" target='_blank' rel="noopener noreferrer">
                            <img src={twitterIcon} alt="Twitter icon" />
                        </a>
                        <a href="https://github.com/" target='_blank' rel="noopener noreferrer">
                            <img src={githubIcon} alt="Github icon" />
                        </a>
                        <a href="https://linkedin.com/" target='_blank' rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn icon" />
                        </a>
                    </span>
                    <p className={styles.description}>
                        Eager to learn and create impactful React applications. Let’s turn ideas into exceptional digital experiences!
                    </p>
                    <a href={cv} download>
                        <button className='hover'>Resume</button>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Hero;
