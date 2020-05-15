export default class FavoritesList {

    /**
     * 
     */
    constructor() {
        // Extract JSON favoritesList string from local storage
        let favoritesList = localStorage.getItem('favoritesList');

        // Parse JSON favoritesList String to `items` object
        this.items = (favoritesList) ? JSON.parse(favoritesList) : [];
    }

    /**
     * Getter method for items
     */
    getItems() {
        return this.items;
    }


    /**
     * Updates favoritesList in localstorage
     */
    update() {
        localStorage.setItem('favoritesList', JSON.stringify(this.items))
    }

    /**
     * Add a new item of the given slug
     */
    add(slug) {

        console.log("favoritesList add");
        // First see if recipe is already present
        let item = this.getItem(slug)

        if (item) {
            // Recipe is in favoritesList already; don't do anything

        } else {
            // Recipe not in favoritesList, add as new item
            this.items.push({
                slug: slug
            });
        }

        this.update();
    }

    /**
     * Remove an item from items via slug
     */
    remove(slug) {
        let item = this.getItem(slug);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via slug
     * Returns null if recipe does not exist in items
     */
    getItem(recipeSlug) {
        return this.items.find(({ slug }) => slug === recipeSlug) || null;
    }
}