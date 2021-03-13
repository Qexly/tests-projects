import './App.css';
import DesktopHeader from './components/Header/DesctopHeader/DesktopHeader.jsx';
import {headerLinks} from './mock';
import {BrowserRouter} from 'react-router-dom';
import Nextscroll from './components/Nextscroll/Nextscroll';
import icon1 from './imgs/double_arrow_white.png';
import icon2 from './imgs/double_arrow_grey.png';
import About from './components/About/About';
import { useMediaQuery } from 'react-responsive';
import {useRef} from 'react';
import MobileHeader from './components/Header/MobileHeader/MobileHeader';

function App() {
  const isTablet = useMediaQuery({
    query: '(max-width: 770px)'
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 321px)'
  })

  const scrolltarget = useRef();

  return (
      <BrowserRouter>
        <div className="App">
          <section className="forest">
            {isMobile ?
              <MobileHeader />
                      :
              <DesktopHeader color={'#f1f1f1'} fontFamily={'PT Sans'} items={headerLinks} />
            }
            {!isTablet && <Nextscroll text="SCROLL DOWN TO SEE MORE" icon={icon1} scrolltarget={scrolltarget} />}
          </section>
          <section className="about" ref={scrolltarget}>
            {!isMobile && <DesktopHeader color={'#d6d6d6'} fontFamily={'NextaLight'} items={headerLinks} />}
            <About />
            {!isMobile && <Nextscroll text="KEEP SCROLLING, THERE IS STILL MORE TO COME" icon={icon2} />}
          </section>
        </div>
      </BrowserRouter>
  );
}

export default App;
