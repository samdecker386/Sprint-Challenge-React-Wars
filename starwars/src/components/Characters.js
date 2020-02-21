import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
// created and imported Character.js component
import Character from "./Character";

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 80px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export default function Characters() {
    // built state property here
    const [characters, setCharacters] = useState([]);

    /* useEffect hook is used to "get" axios properties
    characters.length is at 9 because the 0 index is an empty array
    "characters.length + 1" is used to start at the 1 index
    setCharacters will populate an array by iterating through ""...characters"
    Using a dependency array of "characters" and "setCharacters" to sync for changes
    */
    useEffect(() => {
        if (characters.length < 9) {
            Axios.get(`https://swapi.co/api/people/${characters.length + 1}/`)
                .then((response) => {
                    console.log("First console.log", characters)
                    console.log("Second console.log", response.data)
                    setCharacters([...characters, response.data])
                    
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [characters, setCharacters]);

    // mapping through characters and returning an array with assigned variables for currentValue (item), and index
    // created character.js component that uses these props
    return (
        <Container>
            {characters.map((item, index) => {
                return <Character character={item} key={index}/>
            })}
        </Container>
    )
} 