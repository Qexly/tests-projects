import React, { useEffect, useMemo, useState } from 'react';
import Card from './../../Card/Card.jsx';
import s from './CardsPage.module.css';
import {connect} from 'react-redux';
import { setListTC } from '../../../redux/detailsPokeListReducer.js';
import Loader from '../../Loader/Loader.jsx';

const CardsPage = (props) => {

    const {pokelist, fetching, setListTC, detailsList, history} = props;
    const pageQuery = useMemo(() => {
        return Number(new URLSearchParams(props.location.search).get('page'));
    }, [props.location.search]);
   
    const totalPages = 10;
    const quantityPerPage = 18;
    const [page, setPage] = useState(pageQuery || 1);
    const leftIndex = quantityPerPage * (page - 1);
    const rightIndex = leftIndex + (quantityPerPage - 1);

    useEffect(() => {
        setListTC(pokelist.slice(leftIndex, rightIndex + 1));
        history.push(`/?page=${page}`)
    }, [page]);

    const nextClickHandler = (e) => {
        if (page >= totalPages) return;
        setPage((page) => page + 1);
    }
    
    const prevClickHandler = (e) => {
        if (page <= 1) return;
        setPage((page) => page - 1);
    }

    if (fetching) return <Loader />

    return (
        <div className={`${s.cardsPage} `}>
            <button className={`${s.left}`} onClick={prevClickHandler}>&laquo;</button>
            <div className={`${s.cardsContainer} `}>
                {
                    detailsList.map((pokemon) => {
                        return (
                            !pokemon.sprites ? 
                            <Card
                                imgsrc={'https://sales-generator.ru/upload/medialibrary/74b/74bdb1e99fcff72e5d7f696100632b04.jpg.pagespeed.ce.ckHXwdDbNh.jpg'}
                                number={'server error'}
                                name={'server error'}
                                weight={'server error'}
                                key={'server error'}
                            /> :
                            <Card
                                imgsrc={pokemon.sprites.other.dream_world.front_default}
                                number={pokemon.id}
                                name={pokemon.name}
                                weight={pokemon.weight}
                                key={pokemon.id}
                            />
                        )
                    })
                }
            </div>
            <button className={`${s.right}`} onClick={nextClickHandler}>&raquo;</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    pokelist: state.pokelist.pokelist,
    detailsList: state.detailsPokeList.detailsList,
    fetching: state.detailsPokeList.fetching,
})

export default connect(mapStateToProps, {setListTC})(CardsPage);
