## Differences between Vue, Angular, and React

resources:
  - https://vuejs.org/v2/guide/
  - https://angular.io/start
  - https://reactjs.org/
  - https://levelup.gitconnected.com/angular-vs-react-vs-vue-which-is-the-best-choice-for-2020-81f577697c7e




Outline:
  - Origin of all 3
    - History of each
      - https://www.angularjswiki.com/angular/history-of-angularjs/
      - https://syndicode.com/2019/05/13/vue-js-ecosystem-explained/
      - https://blog.risingstack.com/the-history-of-react-js-on-a-timeline/
      
  - Comparisons
    - Size Comparison
      - Vue seems to be lightest weight framework, which makes sense since it is geared towards performant large scale Single Page Applications (SPAs)
      - Angular also lends itself to SPAs but is very bulky coming in at 500 KB vs Vue's small 80 KB size
        - So its better to use Angular when working with applications that are complex and more heavy-weighted
      - React on the other hand is in the middle coming in at 100 KB, so it is as light as Vue
    - Framework converage
      - Angular seems to a broad framework.
        - Covers everything from project creation to code optimization
        - Has a broad range of features
      - Vue
        - Has a pre-coded structure
        - Has its own tools
        - able to get a project up and started very quickly without much effort.
      - React
        - Doesn't come with the tools that Angular or Vue have
        - But we are able to mix and max a lot of other JS libraries and do whatever we want
        - this lack of tools means that React is very lightweight
      
      
  - How they do the same action differently (with code examples)
    - How routing is done in vue vs. angular vs. react
      - https://angular.io/guide/router
      - https://www.tutorialspoint.com/reactjs/reactjs_router.htm
      - https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes
      - All 3 have a separate routing framework that needs to been installed and work similarly.
