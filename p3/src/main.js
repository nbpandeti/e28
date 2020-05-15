import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router';
import RecipesPage from '@/components/pages/RecipesPage.vue';
import HomePage from '@/components/pages/HomePage.vue';
import RecipePage from '@/components/pages/RecipePage.vue';
import RecipeCreatePage from '@/components/pages/RecipeCreatePage.vue';
import FavoritesListPage from '@/components/pages/FavoritesPage.vue';

import store from '@/common/store';

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/recipes', component: RecipesPage, name: 'recipes' },
  { path: '/recipe/:slug', component: RecipePage, name: 'recipe', props: true },
  { path: '/Recipes/create', component: RecipeCreatePage, name: 'add a recipe' },
  { path: '/favorites', component: FavoritesListPage, name: 'favorites' },
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
