import React from 'react'
import NavBar from '../components/NavBar'
import { Button, Container, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

export default function DisplayRecipe() {
    return (
        <>
            <NavBar />
            <br />
            <Container maxWidth="xl">
                <Grid container sx={{ border: '1px solid black' }}>

                    <Grid container >
                        <Grid item xs={5} sx={{ textAlign: 'center', border: '1px solid black' }}>
                            <h1>IMAGE</h1>
                        </Grid>
                        <Grid item xs={7} sx={{ border: '1px solid black' }}>
                            <div style={{ paddingLeft: 20 }}>
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                <h3>RECIPE</h3>
                                <Link to="/EditRecipe"><Button variant="contained" sx={{margin: "10px"}}>EDIT</Button></Link>
                                </div>
                                
                                <div style={{marginTop: "30px"}}>
                                <p style={{ fontSize: 20 }}><b>Title: </b>Recipe</p>
                                <p style={{ fontSize: 20 }}><b>Description: </b>Recipe</p>
                                <p style={{ fontSize: 20 }}><b>Category: </b>Recipe</p>
                                <p style={{ fontSize: 20 }}><b>Cooking Time: </b>Recipe</p>
                                <p style={{ fontSize: 20 }}><b>Servings: </b>Recipe</p>
                                </div>
                                
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container >
                    <Grid item xs={4} sx={{ border: '1px solid black' }}>
                    <div style={{ paddingLeft: 20 }}>
                                <h3>INGREDIENTS</h3>
                                <div style={{marginTop: "30px"}}>

                                </div>
                                
                            </div>
                        </Grid>
                        <Grid item xs={8} sx={{ border: '1px solid black' }}>
                        <div style={{ paddingLeft: 20 }}>
                                <h3>STEPS</h3>
                                <div style={{marginTop: "30px"}}>

                                </div>
                                
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}
