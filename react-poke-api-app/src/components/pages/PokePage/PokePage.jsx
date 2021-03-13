import React, { useEffect } from 'react';
import s from './PokePage.module.css';
import {connect} from 'react-redux';
import Loader from './../../Loader/Loader.jsx';
import { setOpenedPokePageTC, unsetOpenedPoke } from '../../../redux/detailsPokeListReducer';
//import { withRouter } from 'react-router-dom';

const PokePage = (props) => {
    const {id} = props.match.params;
    const {currentDetails, setOpenedPokePageTC, openedPokePage, unsetOpenedPoke} = props;
    const currentPoke = currentDetails.find((item) => item.id === Number(id)) || openedPokePage;

    useEffect(() => {
        if (!currentPoke) setOpenedPokePageTC(props.match.url);
        return () => unsetOpenedPoke();
    }, [id])

    if (!currentPoke) return <Loader/>

    return (
        <div className={s.poke_page_container}>
            <div className={s.poke_image}>
                <img src={currentPoke.sprites.other.dream_world.front_default} alt=""/>
            </div>
            <ul>
                    <li>Name: <span>{currentPoke.name}</span></li>
                    <li>Height: <span>{currentPoke.height}</span></li>
                    <li>
                        Abilities:&nbsp; 
                        <span>{currentPoke.abilities.map((item) => item.ability.name).join(', ')}</span>
                    </li>
                    <li>ID: <span>{currentPoke.id}</span></li>
                    <li>
                        Types:&nbsp;
                        <span>{currentPoke.types.map((item) => item.type.name).join(', ')}</span>
                    </li>
                    <li>Weight: <span>{currentPoke.weight}</span></li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentDetails: state.detailsPokeList.detailsList,
        openedPokePage: state.detailsPokeList.openedPokePage,
    }
}

//export default withRouter(PokePage);
export default connect(mapStateToProps, {setOpenedPokePageTC, unsetOpenedPoke})(PokePage);

