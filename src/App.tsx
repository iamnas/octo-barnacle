import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
// import Marquee from './components/marquee'
// import About from './components/About'
// import Eyes from './components/Eyes'
// import Featured from './components/Featured'
// import Cards from './components/Cards'
// import ReadyEyes from './components/ReadyEyes'
// import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'



const App = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08, // control the smoothness (0-1, lower is smoother)
    });

    return () => {
      scroll.destroy();
    };
  }, []);


  return (



    <div
      ref={scrollRef}
      data-scroll-container
      className="w-full min-h-screen bg-transparent text-white  font-manrope"
    >
      <Navbar />
      <LandingPage />

    </div>



  )
}

export default App
// <Marquee />
// <About />
// <Eyes />
// <Featured />
// <Cards/>
// <ReadyEyes/>
// <Footer/> 