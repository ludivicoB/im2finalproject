import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditIngredient() {
    const ingreId = useParams();
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/recipes/ingredients/${ingreId.ingredientId}`)
            .then((response) => {
                setIngredients(response.data);
                console.log("Response Ingredients", response.data);
                console.log("RecipeId: ", ingreId.ingredientId);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <Container maxWidth="md">
                asdasd
                <h1>{ingredients.ingredient_name}</h1>
            </Container>
        </>
    )
}
