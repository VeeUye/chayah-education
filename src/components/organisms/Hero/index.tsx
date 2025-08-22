import heroImage from '../../../assets/hero-latest.svg'
import { Button } from '@radix-ui/themes'
import { ArrowRightIcon } from '@radix-ui/react-icons'

import styles from './styles.module.scss'

interface HeroProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
}

const Hero = ({ title, subtitle, buttonText, buttonLink }: HeroProps) => {
  return (
    <section className={styles.base}>
      <div className={styles.heroImageWrapper}>
        <img
          src={heroImage.src}
          alt="Children and teacher with hands raised"
          className={styles.heroImage}
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      <div className={styles.heroOverlay}></div>

      <div className={styles.inner}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
          <a href={buttonLink}>
            <Button size="3" className={styles.heroButton}>
              {buttonText}
              <ArrowRightIcon className={styles.arrow} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
