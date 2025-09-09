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

const Hero = ({ title, buttonText, buttonLink }: HeroProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.leftColumn}>
          <div className={styles.heroText}>
            <h1 className={styles.heroHeading}>{title}</h1>
            <div className={styles.heroSubtitle}>
              Transforming education,{''} <span>one child at a time</span>
            </div>
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
