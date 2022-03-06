import React, { useState } from 'react'; 
import Axios from 'axios';
import ApiResponse from './ApiResponse';
import "./Search.scss";

const Search = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [year, setYear] = useState('');

    const [apiResponse, setApiResponse] = useState<any>();
  
    const search = () => {
        Axios.post('http://localhost:9000/testApi', {
            title: title,
            type: type,
            year: year})
        .then(response => {
            setApiResponse(response); 
        })
    }

    return (
       <div className="search">
            <div className="search-container">
                <div className="search-container__card">
                    <label htmlFor="title">Movie Title </label>
                    <input type="text" name="title" onChange={(e) => {
                        setTitle(e.target.value);
                    }} />
                </div>
                <div className="search-container__card">
                    <label htmlFor="type">Type</label>
                    <select name="type" onChange={(e) => {
                        setType(e.target.value);
                    }}>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                        <option value="episode">Episode</option>    
                    </select>
                </div>
                <div className="search-container__card">
                    <label htmlFor="year">Movie year</label>
                    <select name="year" onChange={(e) => {
                        setYear(e.target.value);
                    }}>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="1999">1999</option>
                    </select>
                </div>
                <div className="search-container__button">
                    <button onClick={search}>Search!</button>
                </div>
                <div className="search-container__card">
                    <ApiResponse response={apiResponse?.data} />
                </div>
            </div>
       </div>
    )
}
export default Search;