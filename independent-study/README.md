
# Differences between Vue, Angular, and React
![](https://miro.medium.com/max/1400/1*Y1ga-b1sgUUPppIupjehMQ.jpeg)
## History

### History of React JS
![](https://s3-eu-west-1.amazonaws.com/risingstack-resources/React+History/react.jpeg)
In 2011, Jordan Walke created the prototype for React, called FaxJS. He was able to ship a search element on Facebook. On May 29th, 2013, React because open-sourced, and during the next couple of months, it because available on JSFiddle, Ruby on Rails, and Python. Since its initial commit, React has gone through 16 major versions, and its most recent version 16.13.1 was made available on March 19th, 2020.

### History of Angular JS
![](https://www.angularjswiki.com/angular/history-of-angularjs/AngularJS_logo.svg__hu45fa200b0f15c492781e019d8d17018d_41371_720x0_resize_lanczos_2.png)
Misko Hevery and Adam Aborns invented AngularJS in 2009. At the time Misko was working with Google and was asked to work on a Google internal tool called Google Feedback Tool. Misko and his team wrote a total of 17000 lines of code in a period of 6 months, and they found it hard to test due to the number of steps needs just to change a single label in HTML. So in his frustration, he challenged his manager that he could rewrite the entire thing in his side project Angular. He managed to complete this take in 3 weeks and reduced 1500 lines of code.  After impressing his manager, he along with his colleges Shyam Seshadri and Igor Minor shipped the Google feedback tool completely using Angular JS. And thus Angular began its life at Google.
Angular has gone through a total of 9 major versions and its latest version 9.1.5 was released today May 7th 2020.

### History of Vue JS
![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/220px-Vue.js_Logo_2.svg.png)
Vue JS was created by Evan You and is maintained by him and the active core team members from Netlify and Netguru. Vue’s first commit was in July 2013 with its official release being in February 2014. Since its initial commit, Vue has gone through 15 official releases. And its latest available release version 2.6.11 was released on Dec 13th 2019.
Evan You created Vue after using AngularJS. In his words he said, “I figured, what if I could just extract the part that I really liked about Angular and build something really lightweight.”

## Comparisons
![](https://miro.medium.com/max/1400/0*6AYCoy_NYGy38VmR)

If we look at the size we can see that ReactJS is the most lightweight at 2.7 KB, followed by Vue at 22.8 KB, and finally the heaviest at 87.4 KB is Angular. Taking into account this size, the number of forks make from each repo via npm, the number of downloads, and the number of issues, we can start to see a pattern. ReactJS seems to be the most well used and the js library with the least number of issues. And with its lightweight nature, it makes React the most well used especially in today's age of performance importance.

Next let's look at the learning curve for each front-end framework. For a developer to learn any new language or framework, it must be easy to debug and must also a good representation in forums and online examples. When we look at Angular and React, both of these frameworks require the developer to have a good understanding of javascript and what kinds of third-party libraries are available in order to figure out what capabilities one can take advantage of. Whereas Vue is extremely straight forward and because of its simplicity many companies are switching to Vue as opposed to Angular and React.

## Practicals
After talking about the history and comparisons of these 3 frameworks, let's look at a practical example. Let's look at what it takes to set up routing in each one of these frameworks.

### React
React uses an approach called dynamic routing. It has its own Router library that provides routing-related components that can be added to a template.

    import  {
	    BrowserRouter,
	    Route,
	    Switch,
	    Link,
	    Redirect
    }  from  'react-router-dom'

    <BrowserRouter>
	    <div id="recipes-app">
		    <h1>Recipe Book</h1>
		    <nav>
			    <Link to="/recipes">Recipes</Link>  |
			    <Link to="/recipe">Recipe</Link>
		    </nav>
		    
		    <Switch>
			    <Route exact path="/"  render={()  =>  (<Redirect to="/recipes"  />)}  />
			    <Route path="/recipes"  component={Recipes}  />
			    <Route path="/recipe"  component={Recipe}  />
			    <Route component={PageNotFound}/>
		    </Switch>
	    </div>
    </BrowserRouter>

### Vue
Here the routing configuration needs to be specified within the main.js where the app also needs to be initialized. We need the vue specific VueRouter.

    Vue.use(VueRouter);
    const  routes  =  [
	    {  path:  '/',  redirect:  '/recipes'  },
	    {  path:  '/recipes',  component:  Recipes  },
	    {  path:  '/recipe',  component:  Recipe  },
	    {  path:  '*',  component:  PageNotFound  }
	];
	const  router  =  new  VueRouter({
		mode:  'history',
		routes
	});

    <nav>
        <router-link to="/recipes">Recipes</router-link>  |
        <router-link to="/recipe">Recipes</router-link>
    </nav>
    <router-view></router-view>

### Angular
According to the documentation the routing info needs to be in a separate app-routing.module.ts. And here we are using the RouterModule from @angular/router

    import  {  RouterModule,  Routes  }  from  '@angular/router';
    const  routes:  Routes  =  [
        {  path:  '',  redirectTo:  'recipes',  pathMatch:  'full'  },
        {  path:  'recipes',  component:  RecipesComponent  },
        {  path:  'recipe',  component:  RecipeComponent  },
        {  path:  '**',  component:  PageNotFoundComponent  }
     ];
     <nav>
	     <a routerLink="/recipes">Recipes</a> |
	     <a routerLink="/recipe">Recipe</a>
     </nav>
     <router-outlet></router-outlet>
     
All three of these approaches are very similar, but with slight differences. 
For configuration and declaration, both Angular and Vue have the routes configured with the initialization of the app. But with React, the routing functionality is declared with the rest of the app's components.
For displaying the views, again Angular and Vue are very similar, as they both use a placeholder directive of sorts. The only thing is that Angular uses router-outlet and Vue uses router-view. On the other hand, React's react-router uses the Route components to do both the definition of route mapping as well as showing the selected view.

## My preference
Of these three, I have used Angular and Vue so far. With a previous company, I was able to use Angular. And with this current course, I am using Vue. I still haven't fully learned how to use React, but I would like to learn more.
With my previous experience, I would have to say that I don't want to use Angular again if possible. I seemed overly bulky and seemed way too pre-defined. I remember it took me about 5 weeks at work to learn and I still don't think I learned how to use it properly. On the other hand, during this course, I've been able to pick up Vue relatively easily, and set up a site and test and get answers to my questions very quickly.

## Resources:
  - https://en.wikipedia.org/wiki/Vue.js
  - https://www.angularjswiki.com/angular/history-of-angularjs/
  - https://syndicode.com/2019/05/13/vue-js-ecosystem-explained/
  - https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/
  - https://reactjs.org/versions/
  - https://github.com/facebook/react/blob/master/CHANGELOG.md#16131-march-19-2020
  - https://en.wikipedia.org/wiki/Angular_(web_framework)
  - https://levelup.gitconnected.com/angular-vs-react-vs-vue-which-is-the-best-choice-for-2020-81f577697c7e
  - https://angular.io/guide/router
  - https://www.tutorialspoint.com/reactjs/reactjs_router.htm
  - https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes