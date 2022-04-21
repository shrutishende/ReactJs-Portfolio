import './index.scss'
import { useState, useEffect, useRef } from 'react'
import React from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'

import { MapContainer, Popup, Marker, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_00yrv8h',
        'template_9ae62fx',
        refForm.current,
        'NzuLz_y95bXM5_yJQ'
      )
      .then(
        () => {
          alert('Message succsessfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message , please try again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am looking for an entry level opportunity as a React js Developer
            with esteemed organization where I can utilize my skills and enhance
            my learning. If you have any, contact me using below form.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>

                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>

                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                  ></input>
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Shruti Shende
          <br />
          Nagpur, Maharashtra
          <br />
          India <br />
          <span>shrutishende11@gmail.com</span>
        </div>
        <div className="map-wrap">
          {/* <MapContainer
            key={new Date().getTime()}
            center={[44.96366, 19.61045]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer> */}
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
