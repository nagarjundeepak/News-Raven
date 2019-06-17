import React,{useState,useEffect} from 'react';
import axios from 'axios';

const defaultState = {
    loading: false,
    success: false,
    error: false,
    results: null
};

const fetchStates = {
    loading: {...defaultState, loading: true},
    success: {...defaultState, success: true},
    error: {...defaultState, error: true}
}

const useFetch = (...args) => {
    const [fetchState, updateState] = useState(fetchStates.loading); 
    useEffect(()=>{
    const abortController = new AbortController();
    const signal = abortController.signal;
    const doFetch = async ()=>{
    try{
        let results = await axios.request({
            method: "get",
            url: "https://newsapi.org/v2/top-headlines?country=in&apiKey=adcfbd67dd244de6a9bce1d58ab4b24c",
            crossDomain: true
        }).then((res)=> res.data.articles);        
        updateState({ ...fetchStates.success, results });
    }catch(err){
        console.log(err);
        updateState({...fetchStates.error});
        }
        return function cleanup(){
            abortController.abort();
        };
    }
        doFetch();
    },[]);
    return fetchState;
}

export default useFetch;