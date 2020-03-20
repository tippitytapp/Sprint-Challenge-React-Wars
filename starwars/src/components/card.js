import React, {useState, useEffect} from "react";
import styled, { withTheme } from "styled-components";
import {Container, Row, Col} from "reactstrap";
import axios from "axios";
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

const Card = props => {
console.log(props.card);
    return (

<CardBackground className="card">
    <h2>Name: {props.card.name}</h2>
    <p>Height: {props.card.height}</p>
    <p>Weight: {props.card.mass}</p>
    <p>Hair Color: {props.card.hair_color}</p>
    <p>Eye Color: {props.card.eye_color}</p>
    <p>Skin Color: {props.card.skin_color}</p>
    <p>Birth Year: {props.card.birth_year}</p>
    <p>Gender: {props.card.gender}</p>
    <p>Homeworld: {props.card.homeworld}</p>
</CardBackground>


    )
}




export default Card;