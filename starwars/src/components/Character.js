import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Axios from "axios";

const Card = styled.div`
    width: 300px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 25px 0;

    background-color: #443e3e;
    opacity: 0.5;
`;

const Name = styled.h3`
    color: white;
    text-shadow: 1px 1px 5px black;
`;

const Detail = styled.p`
    color: white;
    text-shadow: 1px 1px 5px black;
`;

export default function Character(props) {
    const character = props.character;
    // built state property for homeworld changes
    const [homeworld, setHomeworld] = useState();
    
    // useEffect to "get" homeworlds and set dependency for them
    useEffect(() => {
        Axios.get(character.homeworld)
            .then((response) =>{
                setHomeworld(response.data.name)
            })
            .catch((error) => {
                console.log(error)
            })
        }, [homeworld, setHomeworld])

    return (
        // assigning props for component to be exported to characters.js
        <Card>
            <Name>{character.name}</Name>
            <Detail>Height: {character.height}</Detail>
            <Detail>Mass: {character.mass}</Detail>
            <Detail>Birth year: {character.birth_year}</Detail>
            <Detail>Homeworld: {homeworld}</Detail>
        </Card>
    )
} 