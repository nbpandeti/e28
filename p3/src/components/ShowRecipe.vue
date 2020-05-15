<template>
    <router-link data-test='recipe-link'
      class='recipe' :to='{ name: "recipe", params: {slug: recipe.slug }}'>
        <div data-test='recipe-name' class='recipe-name'>{{ recipe.name }}</div>
        <img :data-test='dataTestIdentifier' class='recipe-thumb' :src='imageSrc' />
    </router-link>
</template>

<script>
export default {
    props: ['recipe'],
    data: function() {
        return {};
    },
    computed: {
        dataTestIdentifier: function() {
            return 'recipe-image-' + this.recipe.slug;
        },
        imageSrc: function() {
            try {
                return require('@/assets/images/recipes/' +
                    this.recipe.slug +
                    '.jpg');
            } catch (e) {
                return require('@/assets/images/recipes/image-not-available.jpg');
            }
        }
    }
};
</script>

<style scoped>
</style>