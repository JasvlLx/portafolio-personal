import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Home.css';

function Home() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <animated.section style={props} id="home" className="home">
      <h1>Bienvenido a mi Portafolio</h1>
      <p>Soy [Tu Nombre], un desarrollador web apasionado por crear aplicaciones web increíbles.</p>
    </animated.section>
  );
}

export default Home;
