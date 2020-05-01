
# Project 2
+ By: Nitya Pandeti
+ Production URL: <http://e28p2.e28tyasite.me/>

## Pages summary
- Home Page
- Recipes Page
- Recipe Details Page
- Add a Recipe
- Favorites

## SFC summary
- HomePage.vue
- FavoritesPage.vue
- RecipeCreatePage.vue
- RecipesPage.vue
- RecipePage.vue
- ShowRecipe.vue
  
## Server interaction
- Get a list of Recipes and save in the store for retrieval from Recipes Page and Recipe Details Page

## Outside resources
- https://ww4.publix.com/recipes-planning/aprons-recipes/hearty-potato-and-lentil-salad
- https://i.pinimg.com/originals/f3/e8/b5/f3e8b54f6aa1935f3c02adc32d935d4a.jpg
- https://laracasts.com/discuss/channels/vue/proper-way-of-sorting-list-in-v-for
- https://lodash.com/
- https://itnext.io/dynamic-component-creation-in-vue-js-b002bb41aaf4


## Notes for instructor
- The way I have my firebase set up in basically a 4 separate collection
 Collections: recipes, ingredients, cooking steps, and nutritional facts
- I'm trying to figure out how to exactly do an add form but its giving me a lot of trouble because of the fact that there are an indefined list of ingredients and cooking steps.
 At the moment my add form adds the recipe name, slug, and nutritional info and that's it, and then for it to show up in the recipes page, you need to refresh the page