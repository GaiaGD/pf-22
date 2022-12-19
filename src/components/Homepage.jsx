import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
import { animateScroll as scroll } from "react-scroll";
import {PlanetTheme} from "../PlanetThemeContext"

function Homepage() {
  const {planet} = useContext(PlanetTheme)

  return (
    <div>
      {/* intro */}
      <div className='flex justify-between items-center intro'>
        <div className='mt-64 mb-32 mx-32 flex flex-col items-center'>
            <h1 className={`${planet.second} text-6xl text-center`}>Lorem ipsum dolor sit amet, <span className={`${planet.first}`}>Designer & Front-end Developer</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
            <HashLink
                smooth={true}
                offset={-70}
                duration={1500}
                className={`${planet.cta} p-5 ${planet.first} border-red-700 border-2 border-solid m-16 w-1/3`}
                to="/#projects"
            >
              <h5 className={`${planet.first} text-lg text-center`}>THINGS I'VE MADE</h5>
            </HashLink>
        </div>
      </div>

      {/* things I've done */}
      <div id='projects' className='projects mt-64 mx-64'>
        <div className='my-32'>
            <h2 className={`${planet.first} text-4xl uppercase`}>what I’ve designed & built:</h2>
        </div>
        <div className='flex-col'>
          {/* wheels app */}
          <div className='project flex text-white mb-40 items-center w-11/12'>
            <div className='thumb w-5/12'>
              <img className='w-full' src='src/assets/img/thumb-wheels-app.svg'></img>
            </div>
            <div className='w-7/12 left-4'>
              <h2 className={`${planet.first} text-3xl uppercase`}>WHEELS APP</h2>
              <h5 className='text-lg my-2'>UI - UX, Development</h5>
              <div className={`${planet.second}`}><span className='mr-8 text-lg'>REACT.JS</span><span className='mr-8 text-lg'>JAVASCRIPT</span><span className='text-lg'>CSS</span></div>
              <p className='my-8 text-lg'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className='flex justify-between items-center'>
                <div className='flex w-full'>
                  <Link to="/wheelsapp" className={`cta p-5 w-full ${planet.cta} mr-8`}>
                    <div>
                      <h5 className={`${planet.first} text-lg text-center uppercase`}>view project</h5>
                    </div>
                  </Link>
                  <div className={`cta p-5 w-full ${planet.cta}`}>
                    <h5 className={`${planet.first} text-lg text-center uppercase`}>live site</h5>
                  </div>
                </div>
                <div className='cta p-5'>
                  <img src='src/assets/img/github-repo.svg'/>
                </div>
              </div>
            </div>
          </div>
          {/* booking */}
          <div className='project flex text-white mb-40 justify-end'>
            <div className='w-11/12 flex items-center'>
              <div className='thumb w-5/12'>
                <img className='w-full' src='src/assets/img/thumb-wheels-app.svg'></img>
              </div>
              <div className='w-7/12 flex flex-col'>
              <h2 className={`${planet.first} text-3xl uppercase`}>BOOKING</h2>
                <h5 className='text-lg my-2'>UI - UX, Development</h5>
                <div className={`${planet.second}`}><span className='mr-8 text-lg'>REACT.JS</span><span className='mr-8 text-lg'>JAVASCRIPT</span><span className='text-lg'>CSS</span></div>
                <p className='my-8 text-lg'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='flex justify-between items-center'>
                <div className='flex w-full'>
                  <div className={`cta p-5 w-full ${planet.cta} mr-8`}>
                    <h5 className={`${planet.first} text-lg text-center uppercase`}>view project</h5>
                  </div>
                  <div className={`cta p-5 w-full ${planet.cta}`}>
                    <h5 className={`${planet.first} text-lg text-center uppercase`}>live site</h5>
                  </div>
                </div>
                <div className='cta p-5'>
                  <img src='src/assets/img/github-repo.svg'/>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* see more CTA*/}
        <div className={`cta mx-auto my-32 p-5 ${planet.cta} w-1/3`}>
        <h5 className={`${planet.first} text-lg text-center uppercase`}>See more</h5>
          </div>
      </div>

      {/* about me */}
      <div id='about' className='flex justify-between items-center intro'>
        <div className='mt-64 mb-32 mx-64 flex flex-col items-end'>
            <h1 className={`${planet.first} text-4xl text-right uppercase my-8`}>about me</h1>
            <h2 className='text-white text-3xl text-right'>Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip, space exploration, animal rescue & jiu-jitsu white belt ex ea commodo consequat.</h2>
            <div className={`cta p-5 ${planet.cta} my-16 w-1/3`}>
              <h5 className={`${planet.first} text-lg text-center`}>DOWNLOAD RESUME / CV</h5>
            </div>
        </div>
      </div>

      {/* endorsement */}
      <div className='flex justify-between items-center intro'>
        <div className='mt-64 mb-32 mx-64 flex flex-col items-center'>
          <h1 className={`${planet.first} text-4xl text-center uppercase my-8`}>what they say about me</h1>
          <div className='endorsement flex-col justify-end'>
            <h2 className='text-white text-2xl text-center'>Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip, space exploration, animal rescue & jiu-jitsu white belt ex ea commodo consequat.</h2>
            <p className={`text-right ${planet.second} my-8`}>Someone Lastname, Working as</p>
          </div>
        </div>
      </div>


      {/* planet info */}
      <div className='planet-info h-[50vh]'>
        <div className='relative overflow-x-clip h-48'>
          <div className='absolute w-1/3 -right-48'>
            <img src={`src/assets/img/${planet.image}-zoom.png`}/>
          </div>
        </div>

        <div className='relative w-full'>
          <div className='absolute right-1/4 left-1/4 w-2/4'>
            <h2 className={`text-right text-xl ${planet.second}`}>Mars can have huge dust storms which last for months and can cover the entire planet</h2>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Homepage