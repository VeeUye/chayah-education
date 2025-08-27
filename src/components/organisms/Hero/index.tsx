import heroImage from '../../../assets/hero.jpg'
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
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.leftColumn}>
          <div className={styles.heroText}>
            <div className={styles.heroHeading}>{title}</div>
            <div className={styles.heroSubtitle}>{subtitle}</div>
            <a href={buttonLink}>
              <Button size="3" className={styles.heroButton}>
                {buttonText}
                <ArrowRightIcon />
              </Button>
            </a>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.heroImageWrapper}>
            <img
              src={heroImage.src}
              alt="Smiling student holding books"
              className={styles.heroImage}
              loading="lazy"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
