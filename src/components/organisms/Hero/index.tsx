import heroImage from '../../../assets/hero-4.jpg'
import styles from './styles.module.scss'
import { Container } from '../../../layouts/Container'

interface HeroProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
}

const Hero = ({ title, subtitle, buttonText, buttonLink }: HeroProps) => {
  return (
    <>
      <section className={styles.base}>
        <img
          src={heroImage.src}
          alt="Children and teacher with hands raised"
          className={styles.heroImage}
          loading="lazy"
          aria-hidden="true"
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroSubtitle}>{subtitle}</p>
            <a href={buttonLink} className={styles.heroButton}>
              {buttonText}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
