import React, {useState, useEffect} from "react";
import axios from "axios";
import { Button, Badge, Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const marginMe = {
    marginLeft: '2%'
}

const Photo = (props) => {
    const [photo, setPhoto] = useState({});

    useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=WOzeC5A7jDvr4Bj2gBsiwfcAqZePtONtiQJGa02j')
    .then(response => {
        setPhoto(response.data);
 
    })
    .catch (error => {
        console.log("Sorry no photo returned.", error);
    })
    }, []);

    return (
        <div>
            <Card>
                <CardImg top width="100%" src={photo.url} alt="NASA image"></CardImg>
                <CardHeader tag="h3">{photo.title}</CardHeader>
                <CardBody>
                    <CardTitle>{photo.date}<Badge style={marginMe}>New</Badge></CardTitle>
                    <CardText>
                    {photo.explanation}
                    </CardText>
                </CardBody>
            </Card> 
        </div>
    )
}

export default Photo;