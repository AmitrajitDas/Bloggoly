import React from 'react'
import HeroSVG from '../../assets/hero.svg'
import { useStyles } from './styles.js'

const Hero = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className={classes.heroWrapper}>
        <img src={HeroSVG} alt='Hero' className={classes.hero} />
      </div>
    </div>
  )
}

export default Hero
