import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am Shruti Shende who aims to be able to find an exciting and
            challenging entry level position, alongside a company who
            continuously motivate and drive me to do my best and improve on my
            skills and abilities in order to able to assist the company and
            achieving its mission and goals.
          </p>
          <p>
            I am self motivated, naturally curious and perpetually working on
            improving my skills. I have ability to produce best result in
            pressure situation and ability to work as individual as well as in
            group.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGithub} color="black" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#61DBFB" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
