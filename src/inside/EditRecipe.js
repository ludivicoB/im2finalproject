import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { Button, Container, Grid } from '@mui/material'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditRecipe() {
  const recipe_id = useParams();

  const [recipes, setRecipes] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/recipes/${recipe_id.recipeId}`)
      .then((response) => {
        setRecipes(response.data);
        console.log("Response", response.data);
        console.log("RecipeId: ", recipe_id.recipeId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/recipes/instructions/${recipe_id.recipeId}`)
      .then((response) => {
        setInstructions(response.data);
        console.log("Response Instructions", response.data);
        console.log("RecipeId: ", recipe_id.recipeId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/recipes/ingredients/${recipe_id.recipeId}`)
      .then((response) => {
        setIngredients(response.data);
        console.log("Response Ingredients", response.data);
        console.log("RecipeId: ", recipe_id.recipeId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <NavBar />
      <Container maxWidth="md">
        <br />
        <Grid container sx={{ border: '1px solid black' }}>

          <Grid container sx={{ border: '1px solid black', padding: '10px', margin: '20px' }}>
            <Grid item xs={12}>
              <div style={{margin: '20px'}}>
              <h1 style={{ fontStyle: 'italic', textTransform: 'uppercase' }}>{recipes.recipe_title}</h1>
              <p style={{ fontSize: '20px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{recipes.recipe_description}</p>
              </div>




              <Grid container>
                <h3 style={{ marginLeft: '10rem' }}>INGREDIENTS</h3>
                {ingredients.map((ingredient, index) => (
                  <Grid item xs={8} key={index} sx={{ border: '1px solid black', margin: '10px auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h3 style={{ marginLeft: '5rem' }}>{ingredient.ingredient_name}</h3>
                      <Link to={`/EditIngredient/${recipe_id.recipeId}/${ingredient.ingredient_id}`}><Button variant="contained" sx={{ display: 'flex', marginRight: '2rem', padding: 0, height: '2rem' }}>Edit</Button></Link>
                    </div>

                  </Grid>
                ))}
                <h3 style={{ marginLeft: '10rem', marginTop: '2rem' }}>INSTRUCTIONS</h3>
                {instructions.map((instruction, index) => (
                  <Grid item xs={8} key={index} sx={{ border: '1px solid black', margin: '10px auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h3 style={{ marginLeft: '1rem' }}>{instruction.step_number}: {instruction.step_instruction}</h3>
                      <Button variant="contained" sx={{ display: 'flex', marginRight: '2rem', padding: 0, height: '2rem' }}>Edit</Button>
                    </div>

                  </Grid>
                ))}
              </Grid>


            </Grid>
          </Grid>

        </Grid>
      </Container>
    </>
  )
}
