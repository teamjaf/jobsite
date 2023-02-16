import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import styled from 'styled-components'



const Landing = () => {
  return (
    <main>
        <nav>
        <img src={logo} alt='logo' className='logo' />            
        </nav>

        <div className='container page'>

        </div>

        <div className='info'>
            <h1>
                Job <span> tracking</span> app
            </h1>           
            <p>
            Subway tile magna live-edge YOLO meditation veniam same enamel pin tbh thundercats kickstarter. Semiotics chillwave sustainable, raclette prism polaroid consequat. Air plant before they sold out copper mug banjo activated charcoal shabby chic mustache locavore magna. Flannel man braid cornhole next level tumeric snackwave deserunt. Ad edison bulb slow-carb nulla mollit do culpa mumblecore kinfolk incididunt intelligentsia heirloom biodiesel taxidermy qui. Tonx gastropub fanny pack gentrify cupidatat same post-ironic ad heirloom kitsch messenger bag letterpress viral stumptown. Fam godard same sriracha brunch bespoke cliche, listicle echo park consequat venmo williamsburg.
            </p> 
            <button className='btn btn-hero'> Login/register</button>
        </div>

        <img src={main} alt='job' className='img main-img'/>
    </main>
  )
}

export default Landing