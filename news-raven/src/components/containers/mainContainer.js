import React from 'react';
import useFetch from '../../reducers/useFetch';
import Posts from './posts';

const MainContainer = () =>{
    const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=adcfbd67dd244de6a9bce1d58ab4b24c";
    const {loading, error, results} = useFetch(url);
    return loading ? (<div>loading...</div>) : error ? (<div>Oops...! Error</div>) : (<Posts data={results} />)
}

export default MainContainer;