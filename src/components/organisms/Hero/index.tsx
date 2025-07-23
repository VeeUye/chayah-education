import HeroImage  from './hero-image.svg?react'
import styles from './styles.module.scss'
import {Container} from "../../../layouts/Container";

interface HeroProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
}

const Hero = ({ title, subtitle, buttonText, buttonLink }: HeroProps) => {
  return (
    <>
      <Container>
        <section className={styles.base}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroSubtitle}>{subtitle}</p>
            <a href={buttonLink} className={styles.heroButton}>{buttonText}</a>
          </div>
          <div className={styles.heroImage}>
            <HeroImage className={styles.svg}/>
          </div>
        </section>
      </Container>


    </>
  )
}

export default Hero
