import React, {useState, useEffect} from "react";
import axios from "axios";

const Photo = (props) => {
    const [photo, setPhoto] = useState({});

    useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=WOzeC5A7jDvr4Bj2gBsiwfcAqZePtONtiQJGa02j')
    .then(response => {
        console.log(response);
        setPhoto(response.data);
        console.log(photo);
    })
    .catch (error => {
        console.log("Sorry no photo returned.", error);
    })
    }, []);

    return (
        <div>
            <h1>{photo.title}</h1>
            <h2>{photo.date}</h2>
            <img src={photo.url}></img>
            <p>{photo.explanation}</p>
        </div>
    )
}

export default Photo;