import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { Button, Container, Grid } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function DisplayRecipe() {
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
    <div style={{ backgroundColor: "#F0D1C8" }}>
      <NavBar />
      <br />
      <Container maxWidth="xl">
        <Grid container >

          <Grid container >
            <Grid item xs={5.525} sx={{ textAlign: 'center', backgroundImage: "url('/images/img.png')", backgroundSize: 'auto', backgroundPositionX: 'center', backgroundPositionY: 'center', borderRadius: 10 }}>
              {/* <h1>IMAGE</h1> */}
            </Grid>
            <Grid item xs={.5} >
            </Grid>
            <Grid item xs={5.525} sx={{ backgroundColor: "#FFD8B1", borderRadius: 10 }}>
              <div style={{ paddingLeft: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>

                  <h3>RECIPE</h3>
                  <Link to={`/EditRecipe/${recipe_id.recipeId}`}><Button variant="contained" sx={{ margin: "10px", marginRight: "2rem" }}>EDIT</Button></Link>
                </div>

                <div style={{ marginTop: "30px" }}>
                  <p style={{ fontSize: 20 }}><b>Title: </b>{recipes.recipe_title}</p>
                  <p style={{ fontSize: 20 }}><b>Description: </b>{recipes.recipe_description}</p>
                  <p style={{ fontSize: 20 }}><b>Category: </b>{recipes.category}</p>
                  <p style={{ fontSize: 20 }}><b>Cooking Time: </b>{recipes.cooking_time}</p>
                  <p style={{ fontSize: 20 }}><b>Servings: </b>{recipes.servings}</p>
                </div>

                <div style={{ paddingLeft: 20 }}>
                  <h3>INGREDIENTS</h3>
                  <div style={{ marginTop: "5px" }}>
                    {ingredients.map((ingredient, index) => (
                      <div key={index} style={{ padding: 1, textAlign: "left" }}>
                        <p><b>Ingredient {index + 1}:</b> {ingredient.ingredient_name}  </p>
                        <p><b>Quantity:</b> {ingredient.ingredient_quantity}</p>
                        <p><b>Measurement:</b> {ingredient.ingredient_measurement}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3>STEPS</h3>
                    <div style={{ marginTop: "30px" }}>
                      {instructions.map((instruction, index) => (
                        <div key={index}>
                          <p><b>Step {instruction.step_number}:</b> {instruction.step_instruction}</p>
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>
            </Grid>
          </Grid>
          {/* <Grid container >
            <Grid item xs={3} sx={{ border: '1px solid black' }}>
              <div style={{ paddingLeft: 20 }}>
                <h3>INGREDIENTS</h3>
                <div style={{ marginTop: "5px" }}>
                  {ingredients.map((ingredient, index) => (
                    <div key={index} style={{ padding: 1, textAlign: "left" }}>
                      <p><b>Ingredient {index + 1}:</b> {ingredient.ingredient_name}  </p>
                      <p><b>Quantity:</b> {ingredient.ingredient_quantity}</p>
                      <p><b>Measurement:</b> {ingredient.ingredient_measurement}</p>
                    </div>
                  ))}
                </div>

              </div>
            </Grid>
            <Grid item xs={9} sx={{ border: '1px solid black' }}>
              <div style={{ paddingLeft: 20 }}>
                <h3>STEPS</h3>
                <div style={{ marginTop: "30px" }}>
                  {instructions.map((instruction, index) => (
                    <div key={index}>
                      <p><b>Step {instruction.step_number}:</b> {instruction.step_instruction}</p>
                    </div>
                  ))}

                </div>

              </div>
            </Grid>
          </Grid> */}
        </Grid>
      </Container>
      <br />
    </div>
  )
}
