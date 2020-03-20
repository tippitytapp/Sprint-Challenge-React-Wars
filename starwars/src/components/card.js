import React, {useState, useEffect} from "react";
import styled, { withTheme } from "styled-components";
import {Container, Row, Col} from "reactstrap";
import axios from "axios";
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
const CardBackground = styled.div`
    background-color:white;
    margin:2%;
    padding: 1%;
    border-radius:30px;
    `;
// function GetHomeWorld(){
//     useEffect(() =>{
//         axios.get("")
//         .then(response => console.log(response))
//         .catch(err => console.log("error reported", err))
//     },[])

// }

const Cards = props => {
console.log(props.cards);
    return (

<CardBackground className="cards">
    <CardHeader>Name: {props.cards.name}</CardHeader>
    <p>Height: {props.cards.height}</p>
    <p>Weight: {props.cards.mass}</p>
    <p>Hair Color: {props.cards.hair_color}</p>
    <p>Eye Color: {props.cards.eye_color}</p>
    <p>Skin Color: {props.cards.skin_color}</p>
    <p>Birth Year: {props.cards.birth_year}</p>
    <p>Gender: {props.cards.gender}</p>
    <p>Homeworld: {props.cards.homeworld}</p>
</CardBackground>


    )
}




export default Cards;