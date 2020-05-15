import Api from '@/common/api.js';

export { default as FavoritesList } from '@/common/FavoritesList.js';

export const config = {
    firebase: {
        apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
        projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID
    }
}

/* eslint-disable */
console.log(process.env.VUE_APP_FIREBASE_PROJECT_ID);
/* eslint-enable */

export const api = new Api({
    apiKey: config.firebase.apiKey,
    projectId: config.firebase.projectId
});


