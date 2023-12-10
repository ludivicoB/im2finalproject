import React from "react";
import NavBar from "../components/NavBar";
import RecipeCard from "../components/RecipeCard";
import "./RecipeList.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../UserProvider";
export default function RecipeList() {
  const { user } = useUser();
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/recipes/user/${user.userid}`)
      .then((response) => {
        setRecipes(response.data);
        console.log(response.data);
        console.log("Userid: " + user.userid);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <NavBar />
      <div className="recipelist-body">
        <div className="recipelist-container">
          {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <RecipeCard
                recipename={recipe.recipe_title}
                description={recipe.recipe_description}
                key={index}
              />
            ))
          ) : (
            <p>Hello</p>
          )}
        </div>
      </div>
    </>
  );
}
