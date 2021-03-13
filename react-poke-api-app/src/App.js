import React, {useEffect, useMemo} from 'react';
import './App.css';
import DesktopHeader from './components/Header/DesktopHeader/DesktopHeader';
import CardsPage from './components/pages/CardsPage/CardsPage.jsx';
import ListPage from './components/pages/ListPage/ListPage.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import { doInitialization } from './redux/appReducer';
import Loader from './components/Loader/Loader.jsx';
import PokePage from './components/pages/PokePage/PokePage';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from './components/Header/MobileHeader/MobileHeader';

function App(props) { //18 

  const list = useMemo(() => [{value: 'Главная', href:'/'}, {value: 'Все покемоны', href:'/list'}]);

  const {doInitialization, initialized} = props;
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

  useEffect(() =>{
    doInitialization();
  }, [])

  if (!initialized) return <Loader />

  return (
    <BrowserRouter>
      <div className="App">
        {isMobile ? <MobileHeader list={list} /> : <DesktopHeader />} 
        <div className="content_container">
          <Switch>
            <Route path='/pokemon/:id' render={(props) => <PokePage {...props}/>} />
            <Route path='/list' render={() => <ListPage/>} />
            <Route exact path='/' render={(props) => <CardsPage {...props}/>}/>
            <Route exact path='*' render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, {doInitialization})(App);

//export default App;
