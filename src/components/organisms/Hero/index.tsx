import HeroImage from '../../../assets/hero.jpg'

interface HeroProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
}

const Hero = ({ title, subtitle, buttonText, buttonLink }: HeroProps) => {
  return (
    <>
      {/*<section className="relative bg-white dark:bg-gray-900">*/}
      {/*  <div*/}
      {/*    className="absolute inset-0 bg-cover bg-center"*/}
      {/*    style={{ backgroundImage: `url(${HeroImage.src})` }}*/}
      {/*  >*/}
      {/*    {' '}*/}
      {/*    /!*<div className="absolute inset-0 bg-black opacity-50"></div>*!/*/}
      {/*  </div>*/}
      {/*  <div className="relative z-10">*/}
      {/*    <div className="container mx-auto px-6 py-16 text-center">*/}
      {/*      <div className="mx-auto max-w-lg">*/}
      {/*        <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">*/}
      {/*          {title}*/}
      {/*        </h1>*/}
      {/*        <p className="mt-6 text-gray-600 dark:text-gray-300">*/}
      {/*          {subtitle}*/}
      {/*        </p>*/}
      {/*        <a*/}
      {/*          href={buttonLink}*/}
      {/*          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"*/}
      {/*        >*/}
      {/*          {buttonText}*/}
      {/*        </a>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <section className="relative bg-white dark:bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroImage.src})` }}
        >
          {' '}
          {/*<div className="absolute inset-0 bg-black opacity-50"></div>*/}
        </div>
        <div className="relative z-10">
          <div className="container mx-auto px-6 py-16 text-center">
            <div className="mx-auto max-w-lg">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
                {title}
              </h1>
              <p className="mt-6 text-gray-600 dark:text-gray-300">
                {subtitle}
              </p>
              <a
                href={buttonLink}
                className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
