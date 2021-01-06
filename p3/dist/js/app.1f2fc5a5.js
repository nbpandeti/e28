(function(e){function t(t){for(var i,o,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],i=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var i={},n={app:0},a=[];function o(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=i,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(r,i,function(t){return e[t]}.bind(null,i));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"207d":function(e,t,r){"use strict";var i=r("8a7b"),n=r.n(i);n.a},2552:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("img",{attrs:{alt:"Recipes logo",id:"logo",src:r("dedd")}}),i("nav",[i("ul",e._l(e.links,(function(t){return i("li",{key:t},[i("router-link",{attrs:{to:{name:t},exact:""}},[e._v(" "+e._s(t)+" ")])],1)})),0)]),i("router-view")],1)},a=[],o={name:"App",components:{},data:function(){return{links:["home","recipes","add a recipe","add an ingredient","add a cook step","favorites"]}},mounted:function(){console.log("App setDatabase"),this.$store.dispatch("setDatabase")}},s=o,u=(r("5c0b"),r("2877")),c=Object(u["a"])(s,n,a,!1,null,null,null),p=c.exports,l=r("1dce"),d=r.n(l),m=r("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"recipes"}},[r("h2",[e._v("Recipes")]),e._l(e.recipes,(function(e){return r("show-recipe",{key:e.id,attrs:{recipe:e}})}))],2)},v=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-link",{staticClass:"recipe",attrs:{"data-test":"recipe-link",to:{name:"recipe",params:{slug:e.recipe.slug}}}},[r("div",{staticClass:"recipe-name",attrs:{"data-test":"recipe-name"}},[e._v(e._s(e.recipe.name))]),r("img",{staticClass:"recipe-thumb",attrs:{"data-test":e.dataTestIdentifier,src:e.imageSrc}})])},_=[],$={props:["recipe"],data:function(){return{}},computed:{dataTestIdentifier:function(){return"recipe-image-"+this.recipe.slug},imageSrc:function(){try{return r("ca62")("./"+this.recipe.slug+".jpg")}catch(e){return r("82a1")}}}},b=$,h=Object(u["a"])(b,f,_,!1,null,"2ae8e30f",null),I=h.exports,S={components:{"show-recipe":I},data:function(){return{}},computed:{recipes:function(){return this.$store.state.recipes}}},k=S,y=Object(u["a"])(k,g,v,!1,null,"14ced624",null),x=y.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v("This is an online recipe book!!!!")]),r("p",[e._v("Enjoy to your heart's content!!")])])}],j={},w=Object(u["a"])(j,C,R,!1,null,"6e16b89f",null),q=w.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.recipe.slug?r("div",{attrs:{id:"recipe-page"}},[r("h1",{attrs:{"data-test":"recipe-name"}},[e._v(e._s(e.recipe.name))]),r("a",{attrs:{href:"javascript:void(0)","data-test":"add-to-favorites-link"},on:{click:function(t){return e.addToFavoritesList(e.slug)}}},[e._v("Add to Favorites")]),r("div",[r("img",{staticClass:"recipe-thumb",attrs:{alt:"recipe image of  "+e.recipe.name,src:e.imageSrc}})]),r("transition",{attrs:{name:"fade"}},[e.addAlert?r("div",{staticClass:"alert",attrs:{"data-test":"add-to-favorites-confirmation"}},[e._v("This recipe has been add to Your Favorites")]):e._e()]),r("div",{staticStyle:{display:"inline-block",width:"100%"}},[r("div",{staticStyle:{align:"left","text-align":"left",float:"left"}},[r("p",{staticStyle:{"font-weight":"bold","margin-top":"5px","margin-bottom":"5px","font-size":"2.5rem","letter-spacing":"-1px"}},[e._v("Ingredients:")]),e._l(e.ingredients,(function(t){return r("div",{key:t.name,staticStyle:{"list-style-type":"none"}},[r("span",{attrs:{"data-test":t.name}},[e._v(e._s(t.quantity)+" "+e._s(t.name)),t.prep_method?r("span",[e._v(": "+e._s(t.prep_method))]):e._e()])])}))],2),r("div",{staticStyle:{float:"right",align:"right",font:"none",width:"250px",border:"1px solid #000",padding:"6px","boxing-sizing":"border-box","font-size":"12px","line-height":"14px","text-align":"left",color:"#333",margin:"0","margin-botton":"5px"}},[r("p",{staticStyle:{"font-weight":"bold","margin-top":"5px","margin-bottom":"5px","font-size":"3rem","letter-spacing":"-1px"}},[e._v("Nutritional Facts")]),r("span",{},[e._v("Servings per Recipe about "+e._s(e.nutriInfo.servings_per_recipe))]),r("div",{staticStyle:{"background-color":"black",height:"10px",width:"100%"}}),e._m(0),r("hr",{staticStyle:{margin:"1px"}}),r("span",[e._v("Calories "+e._s(e.nutriInfo.calories))]),r("div",{staticStyle:{"background-color":"black",height:"10px",width:"100%"}}),r("span",[r("b",[e._v("Total")]),e._v(" Fat "+e._s(e.nutriInfo.fat_grams)+"g")]),r("hr",{staticStyle:{margin:"1px"}}),r("span",{staticStyle:{"margin-left":"15px"}},[e._v("Saturated Fat "+e._s(e.nutriInfo.sat_fat_grams)+"g")]),r("hr",{staticStyle:{margin:"1px"}}),r("span",{staticStyle:{"margin-left":"15px"}},[r("i",[e._v("Trans")]),e._v(" Fat "+e._s(e.nutriInfo.trans_fat_grams)+"g")]),r("hr",{staticStyle:{margin:"1px"}}),r("span",[r("b",[e._v("Cholesterol")]),e._v(" "+e._s(e.nutriInfo.cholesterol_mg)+"mg")]),r("hr",{staticStyle:{margin:"1px"}}),r("span",[r("b",[e._v("Sodium")]),e._v(" "+e._s(e.nutriInfo.sodium_mg)+"mg")]),r("hr",{staticStyle:{margin:"1px"}}),r("span",[r("b",[e._v("Total Carbohydrate")]),e._v(" "+e._s(e.nutriInfo.carbs_grams)+"g")]),r("hr",{staticStyle:{margin:"1px"}}),r("span",{staticStyle:{"margin-left":"15px"}},[e._v("Dietary Fiber "+e._s(e.nutriInfo.fiber_grams)+"g")]),r("hr",{staticStyle:{margin:"1px"}}),r("span",{staticStyle:{"margin-left":"15px"}},[e._v("Sugars "+e._s(e.nutriInfo.sugar_grams)+"g")]),r("hr",{staticStyle:{margin:"1px"}}),r("span",[r("b",[e._v("Protein")]),e._v(" "+e._s(e.nutriInfo.protein_grams)+"g")])])]),r("div",{staticStyle:{align:"left","text-align":"left"}},[r("p",{staticStyle:{"font-weight":"bold","margin-top":"5px","margin-bottom":"5px","font-size":"2.5rem","letter-spacing":"-1px"}},[e._v("Steps:")]),r("table",[r("tr",e._l(e.cookSteps,(function(t){return r("div",{key:t.step_number},[r("td",{attrs:{"data-test":t.step_number}},[e._v(e._s(t.step_number)+".")]),r("td",[e._v(e._s(t.step_details))])])})),0)])]),r("router-link",{attrs:{to:{name:"recipes"}}},[e._v("← Return to recipes list")])],1):e._e()},N=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("b",[e._v("Amount Per Serving")])])}],P=(r("7db0"),r("4160"),r("159b"),r("96cf"),r("1da1")),E=r("d4ec"),V=r("bee2"),F=r("59ca"),L=(r("e71f"),function(){function e(t){Object(E["a"])(this,e),F["initializeApp"]({apiKey:t.apiKey,authDomain:t.projectId+".firebaseapp.com",databaseURL:"https://"+t.projectId+".firebaseio.com",projectId:t.projectId}),this.api=F["firestore"]()}return Object(V["a"])(e,[{key:"find",value:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t,r,i){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).where(r,"==",i).get();case 3:return n=e.sent,e.abrupt("return",n.docs.shift().data());case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error getting documents: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,r,i){return e.apply(this,arguments)}return t}()},{key:"filter",value:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t,r,i,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).where(r,i,n).get();case 3:return a=e.sent,e.abrupt("return",a.docs);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error getting documents: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,r,i,n){return e.apply(this,arguments)}return t}()},{key:"get",value:function(e,t){return this.find(e,"id",t)}},{key:"all",value:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={},e.next=3,this.api.collection(t).get();case 3:return i=e.sent,i.forEach((function(e){r[e.id]=e.data()})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"add",value:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(t,r){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).add(r);case 3:return i=e.sent,e.abrupt("return",i.id);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error adding document: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(e,t){this.api.collection(e).doc(t).delete()}}]),e}()),B=(r("c975"),r("a434"),function(){function e(){Object(E["a"])(this,e);var t=localStorage.getItem("favoritesList");this.items=t?JSON.parse(t):[]}return Object(V["a"])(e,[{key:"getItems",value:function(){return this.items}},{key:"update",value:function(){localStorage.setItem("favoritesList",JSON.stringify(this.items))}},{key:"add",value:function(e){console.log("favoritesList add");var t=this.getItem(e);t||this.items.push({slug:e}),this.update()}},{key:"remove",value:function(e){var t=this.getItem(e),r=this.items.indexOf(t);t&&(this.items.splice(r,1),this.update())}},{key:"getItem",value:function(e){return this.items.find((function(t){var r=t.slug;return r===e}))||null}}]),e}()),T={firebase:{apiKey:Object({VUE_APP_FIREBASE_PROJECT_ID:"recipe-search-book",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FIREBASE_API_KEY,projectId:"recipe-search-book"}};console.log("recipe-search-book");var A=new L({apiKey:T.firebase.apiKey,projectId:T.firebase.projectId}),D={name:"",props:["slug"],data:function(){return{addAlert:!1}},computed:{recipe:function(){return this.$store.getters.getRecipeBySlug(this.slug)},cookSteps:function(){return this.$store.getters.getRecipeCookingStepsBySlug(this.slug)},ingredients:function(){return this.$store.getters.getRecipeIngredientsBySlug(this.slug)},nutriInfo:function(){return this.$store.getters.getRecipeNutriInfoBySlug(this.slug)},imageSrc:function(){try{return r("ca62")("./"+this.recipe.slug+".jpg")}catch(e){return r("82a1")}}},methods:{addToFavoritesList:function(e){var t=this,r=new B;r.add(e),this.addAlert=!0,setTimeout((function(){return t.addAlert=!1}),3e3)}}},U=D,M=Object(u["a"])(U,O,N,!1,null,"0254d950",null),z=M.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Add a Recipe")]),r("div",[e._v("Name "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.recipe.name.$model,expression:"$v.recipe.name.$model"}],class:{"form-input-error":e.$v.recipe.name.$error},attrs:{"data-test":"recipe-name-input",type:"text",id:"name"},domProps:{value:e.$v.recipe.name.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.recipe.name,"$model",t.target.value)}}}),e.$v.recipe.name.$error?r("div",[e.$v.recipe.name.required?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Recipe Name is required ")])]):e._e()]),r("br"),r("div",[e._v("URL Identifier: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.recipe.slug.$model,expression:"$v.recipe.slug.$model"}],class:{"form-input-error":e.$v.recipe.slug.$error},attrs:{"data-test":"recipe-slug-input",type:"text",id:"slug"},domProps:{value:e.$v.recipe.slug.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.recipe.slug,"$model",t.target.value)}}}),r("small",{staticClass:"form-help"},[e._v("Min: 5")]),e.$v.recipe.slug.$error?r("div",[e.$v.recipe.slug.required?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" URL identifier is required ")]),e.$v.recipe.slug.minLength?r("div",{staticClass:"form-feedback-error"},[e._v(" URL identifier must be at least 5 characters long. ")]):e._e(),e.$v.recipe.slug.doesNotExist?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" This URL identifier has also been associated with another recipe. Please enter something different. ")])]):e._e()]),r("div",[r("p",[e._v("Nutritional Value:")]),r("div",[e._v("Servings per Recipe: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.nutriInfo.servings_per_recipe.$model,expression:"$v.nutriInfo.servings_per_recipe.$model"}],class:{"form-input-error":e.$v.nutriInfo.servings_per_recipe.$error},attrs:{"data-test":"recipe-serv-input",type:"text"},domProps:{value:e.$v.nutriInfo.servings_per_recipe.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.nutriInfo.servings_per_recipe,"$model",t.target.value)}}}),e.$v.nutriInfo.servings_per_recipe.decimal?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be a number ")]),e.$v.nutriInfo.servings_per_recipe.minValue?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be greater than or equal to 0. ")])]),r("div",[e._v("Calories: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.nutriInfo.calories.$model,expression:"$v.nutriInfo.calories.$model"}],class:{"form-input-error":e.$v.nutriInfo.calories.$error},attrs:{"data-test":"recipe-cal-input",type:"text"},domProps:{value:e.$v.nutriInfo.calories.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.nutriInfo.calories,"$model",t.target.value)}}}),e._v("kcal "),e.$v.nutriInfo.calories.decimal?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be a number ")]),e.$v.nutriInfo.calories.minValue?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be greater than or equal to 0. ")])]),r("div",[e._v("Total Fat: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.nutriInfo.fat_grams.$model,expression:"$v.nutriInfo.fat_grams.$model"}],class:{"form-input-error":e.$v.nutriInfo.fat_grams.$error},attrs:{"data-test":"recipe-fat-input",type:"text"},domProps:{value:e.$v.nutriInfo.fat_grams.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.nutriInfo.fat_grams,"$model",t.target.value)}}}),e._v("g "),e.$v.nutriInfo.fat_grams.decimal?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be a number ")]),e.$v.nutriInfo.fat_grams.minValue?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be greater than or equal to 0. ")])]),r("div",[e._v("Saturated Fat: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.nutriInfo.sat_fat_grams.$model,expression:"$v.nutriInfo.sat_fat_grams.$model"}],class:{"form-input-error":e.$v.nutriInfo.sat_fat_grams.$error},attrs:{"data-test":"recipe-sat-fat-input",type:"text"},domProps:{value:e.$v.nutriInfo.sat_fat_grams.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.nutriInfo.sat_fat_grams,"$model",t.target.value)}}}),e._v("g "),e.$v.nutriInfo.sat_fat_grams.decimal?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be a number ")]),e.$v.nutriInfo.sat_fat_grams.minValue?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be greater than or equal to 0. ")])]),r("div",[e._v("Trans Fat: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.nutriInfo.trans_fat_grams.$model,expression:"$v.nutriInfo.trans_fat_grams.$model"}],class:{"form-input-error":e.$v.nutriInfo.trans_fat_grams.$error},attrs:{"data-test":"recipe-trans-fat-input",type:"text"},domProps:{value:e.$v.nutriInfo.trans_fat_grams.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.nutriInfo.trans_fat_grams,"$model",t.target.value)}}}),e._v("g "),e.$v.nutriInfo.trans_fat_grams.decimal?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be a number ")]),e.$v.nutriInfo.trans_fat_grams.minValue?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be greater than or equal to 0. ")])]),r("div",[e._v("Cholesterol: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.nutriInfo.cholesterol_mg.$model,expression:"$v.nutriInfo.cholesterol_mg.$model"}],class:{"form-input-error":e.$v.nutriInfo.cholesterol_mg.$error},attrs:{"data-test":"recipe-chol-input",type:"text"},domProps:{value:e.$v.nutriInfo.cholesterol_mg.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.nutriInfo.cholesterol_mg,"$model",t.target.value)}}}),e._v("mg "),e.$v.nutriInfo.cholesterol_mg.decimal?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be a number ")]),e.$v.nutriInfo.cholesterol_mg.minValue?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be greater than or equal to 0. ")])]),r("div",[e._v("Sodium: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.nutriInfo.sodium_mg.$model,expression:"$v.nutriInfo.sodium_mg.$model"}],class:{"form-input-error":e.$v.nutriInfo.sodium_mg.$error},attrs:{"data-test":"recipe-sodium-input",type:"text"},domProps:{value:e.$v.nutriInfo.sodium_mg.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.nutriInfo.sodium_mg,"$model",t.target.value)}}}),e._v("mg "),e.$v.nutriInfo.sodium_mg.decimal?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be a number ")]),e.$v.nutriInfo.sodium_mg.minValue?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be greater than or equal to 0. ")])]),r("div",[e._v("Total Carbohydrate: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.nutriInfo.carbs_grams.$model,expression:"$v.nutriInfo.carbs_grams.$model"}],class:{"form-input-error":e.$v.nutriInfo.carbs_grams.$error},attrs:{"data-test":"recipe-carb-input",type:"text"},domProps:{value:e.$v.nutriInfo.carbs_grams.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.nutriInfo.carbs_grams,"$model",t.target.value)}}}),e._v("g "),e.$v.nutriInfo.carbs_grams.decimal?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be a number ")]),e.$v.nutriInfo.carbs_grams.minValue?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be greater than or equal to 0. ")])]),r("div",[e._v("Dietary Fiber: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.nutriInfo.fiber_grams.$model,expression:"$v.nutriInfo.fiber_grams.$model"}],class:{"form-input-error":e.$v.nutriInfo.fiber_grams.$error},attrs:{"data-test":"recipe-fiber-input",type:"text"},domProps:{value:e.$v.nutriInfo.fiber_grams.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.nutriInfo.fiber_grams,"$model",t.target.value)}}}),e._v("g "),e.$v.nutriInfo.fiber_grams.decimal?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be a number ")]),e.$v.nutriInfo.fiber_grams.minValue?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be greater than or equal to 0. ")])]),r("div",[e._v("Sugars: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.nutriInfo.sugar_grams.$model,expression:"$v.nutriInfo.sugar_grams.$model"}],class:{"form-input-error":e.$v.nutriInfo.sugar_grams.$error},attrs:{"data-test":"recipe-sugar-input",type:"text"},domProps:{value:e.$v.nutriInfo.sugar_grams.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.nutriInfo.sugar_grams,"$model",t.target.value)}}}),e._v("g "),e.$v.nutriInfo.sugar_grams.decimal?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be a number ")]),e.$v.nutriInfo.sugar_grams.minValue?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be greater than or equal to 0. ")])]),r("div",[e._v("Protein: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.nutriInfo.protein_grams.$model,expression:"$v.nutriInfo.protein_grams.$model"}],class:{"form-input-error":e.$v.nutriInfo.protein_grams.$error},attrs:{"data-test":"recipe-protein-input",type:"text"},domProps:{value:e.$v.nutriInfo.protein_grams.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.nutriInfo.protein_grams,"$model",t.target.value)}}}),e._v("g "),e.$v.nutriInfo.protein_grams.decimal?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be a number ")]),e.$v.nutriInfo.protein_grams.minValue?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Servings per Recipe must be greater than or equal to 0. ")])])]),r("input",{attrs:{"data-test":"add-recipe-button",type:"submit",value:"Add"},on:{click:function(t){return t.preventDefault(),e.addRecipe(t)}}}),r("transition",{attrs:{name:"fade"}},[e.added?r("div",{staticClass:"alert",attrs:{"data-test":"recipe-added-confirmation"}},[e._v(" Your recipe was added! ")]):e._e()])],1)},Y=[],J=(r("caad"),r("2532"),r("b5ae")),G={data:function(){return{added:!1,recipe:{name:"",slug:""},nutriInfo:{calories:0,carbs_grams:0,cholesterol_mg:0,fat_grams:0,fiber_grams:0,protein_grams:0,recipe_slug:"",sat_fat_grams:0,servings_per_recipe:0,sodium_mg:0,sugar_grams:0,trans_fat_grams:0}}},validations:function(){return{recipe:{name:{required:J["required"]},slug:{required:J["required"],minLength:Object(J["minLength"])(5),doesNotExist:function(e){return!this.$store.getters.getRecipeBySlugForForm(e)||null==this.$store.getters.getRecipeBySlugForForm(e)}}},nutriInfo:{calories:{decimal:J["decimal"],minValue:Object(J["minValue"])(0)},carbs_grams:{decimal:J["decimal"],minValue:Object(J["minValue"])(0)},cholesterol_mg:{decimal:J["decimal"],minValue:Object(J["minValue"])(0)},fat_grams:{decimal:J["decimal"],minValue:Object(J["minValue"])(0)},fiber_grams:{decimal:J["decimal"],minValue:Object(J["minValue"])(0)},protein_grams:{decimal:J["decimal"],minValue:Object(J["minValue"])(0)},sat_fat_grams:{decimal:J["decimal"],minValue:Object(J["minValue"])(0)},servings_per_recipe:{decimal:J["decimal"],minValue:Object(J["minValue"])(0)},sodium_mg:{decimal:J["decimal"],minValue:Object(J["minValue"])(0)},sugar_grams:{decimal:J["decimal"],minValue:Object(J["minValue"])(0)},trans_fat_grams:{decimal:J["decimal"],minValue:Object(J["minValue"])(0)}}}},methods:{addRecipe:function(){var e=this;this.nutriInfo.recipe_slug=this.recipe.slug,this.$v.$touch(),0==this.$v.$anyError&&(A.add("nutritional_Info",this.nutriInfo).then((function(t){t.includes("Error")?alert(t):e.nutriInfo={calories:0,carbs_grams:0,cholesterol_mg:0,fat_grams:0,fiber_grams:0,protein_grams:0,recipe_slug:"",sat_fat_grams:0,servings_per_recipe:0,sodium_mg:0,sugar_grams:0,trans_fat_grams:0}})),A.add("recipes",this.recipe).then((function(t){t.includes("Error")?alert(t):(e.$v.$reset(),e.added=!0,setTimeout((function(){return e.added=!1}),3e3),e.recipe={name:"",slug:""})})))}}},H=G,Q=(r("de44"),Object(u["a"])(H,K,Y,!1,null,"1737fee2",null)),W=Q.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Add a Recipe Ingredient")]),r("div",[e._v("URL Identifier: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.recipeIngredient.recipe_slug.$model,expression:"$v.recipeIngredient.recipe_slug.$model"}],class:{"form-input-error":e.$v.recipeIngredient.recipe_slug.$error},attrs:{"data-test":"recipe-ingredient-slug-input",type:"text"},domProps:{value:e.$v.recipeIngredient.recipe_slug.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.recipeIngredient.recipe_slug,"$model",t.target.value)}}}),e.$v.recipeIngredient.recipe_slug.$error?r("div",[e.$v.recipeIngredient.recipe_slug.required?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" URL identifier is required ")]),e.$v.recipeIngredient.recipe_slug.exists?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" This URL identifier does not exist. Please enter an existing identifier. ")])]):e._e()]),r("div",[e._v("Ingredient name: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.recipeIngredient.name.$model,expression:"$v.recipeIngredient.name.$model"}],class:{"form-input-error":e.$v.recipeIngredient.name.$error},attrs:{"data-test":"recipe-ingredient-name-input",type:"text"},domProps:{value:e.$v.recipeIngredient.name.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.recipeIngredient.name,"$model",t.target.value)}}}),e.$v.recipeIngredient.name.$error?r("div",[e.$v.recipeIngredient.name.required?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Ingredient name is required ")])]):e._e()]),r("div",[e._v("Ingredient quantity: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.recipeIngredient.quantity.$model,expression:"$v.recipeIngredient.quantity.$model"}],class:{"form-input-error":e.$v.recipeIngredient.quantity.$error},attrs:{"data-test":"recipe-ingredient-quantity-input",type:"text"},domProps:{value:e.$v.recipeIngredient.quantity.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.recipeIngredient.quantity,"$model",t.target.value)}}}),e.$v.recipeIngredient.quantity.$error?r("div",[e.$v.recipeIngredient.quantity.required?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Ingredient quantity is required ")])]):e._e()]),r("div",[e._v("Ingredient Prep Method: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.recipeIngredient.prep_method,expression:"recipeIngredient.prep_method"}],attrs:{"data-test":"recipe-ingredient-prep-method-input",type:"text"},domProps:{value:e.recipeIngredient.prep_method},on:{input:function(t){t.target.composing||e.$set(e.recipeIngredient,"prep_method",t.target.value)}}})]),r("input",{attrs:{"data-test":"add-ingredient-button",type:"submit",value:"Add"},on:{click:function(t){return t.preventDefault(),e.addIngredient(t)}}}),r("transition",{attrs:{name:"fade"}},[e.added?r("div",{staticClass:"alert",attrs:{"data-test":"ingredient-added-confirmation"}},[e._v(" Your recipe ingredient was added! ")]):e._e()])],1)},Z=[],ee={data:function(){return{added:!1,recipeIngredient:{recipe_slug:"",name:"",quantity:"",prep_method:""}}},validations:function(){return{recipeIngredient:{recipe_slug:{required:J["required"],exists:function(e){return null!=this.$store.getters.getRecipeBySlugForForm(e)&&this.$store.getters.getRecipeBySlugForForm(e)}},name:{required:J["required"]},quantity:{required:J["required"]}}}},methods:{addIngredient:function(){var e=this;this.$v.$touch(),0==this.$v.$anyError&&A.add("receipe_ingredients",this.recipeIngredient).then((function(t){t.includes("Error")?alert(t):(e.$v.$reset(),e.added=!0,setTimeout((function(){return e.added=!1}),3e3),e.recipeIngredient={recipe_slug:"",name:"",quantity:"",prep_method:""})}))}}},te=ee,re=(r("5921"),Object(u["a"])(te,X,Z,!1,null,"673c337b",null)),ie=re.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Add a Cook Step")]),r("div",[e._v("URL Identifier: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.recipeCookingStep.recipe_slug.$model,expression:"$v.recipeCookingStep.recipe_slug.$model"}],class:{"form-input-error":e.$v.recipeCookingStep.recipe_slug.$error},attrs:{"data-test":"recipe-cook-step-slug-input",type:"text"},domProps:{value:e.$v.recipeCookingStep.recipe_slug.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.recipeCookingStep.recipe_slug,"$model",t.target.value)}}}),e.$v.recipeCookingStep.recipe_slug.$error?r("div",[e.$v.recipeCookingStep.recipe_slug.required?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" URL identifier is required ")]),e.$v.recipeCookingStep.recipe_slug.exists?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" This URL identifier does not exist. Please enter an existing identifier. ")])]):e._e()]),r("div",[e._v("Cook Step Number: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.recipeCookingStep.step_number.$model,expression:"$v.recipeCookingStep.step_number.$model"}],class:{"form-input-error":e.$v.recipeCookingStep.step_number.$error},attrs:{"data-test":"recipe-cook-step-number-input",type:"text"},domProps:{value:e.$v.recipeCookingStep.step_number.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.recipeCookingStep.step_number,"$model",t.target.value)}}}),e.$v.recipeCookingStep.step_number.$error?r("div",[e.$v.recipeCookingStep.step_number.required?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Cook Step number is required ")]),e.$v.recipeCookingStep.step_number.integer?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Cook Step number must be an whole number ")]),e.$v.recipeCookingStep.step_number.isNextStep?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Cook Step number must be "+e._s(this.nextStep)+" for recipe slug '"+e._s(this.recipeCookingStep.recipe_slug)+"'. ")])]):e._e()]),r("div",[e._v("Cook Step Details: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.recipeCookingStep.step_details.$model,expression:"$v.recipeCookingStep.step_details.$model"}],class:{"form-input-error":e.$v.recipeCookingStep.step_details.$error},attrs:{"data-test":"recipe-cook-step-details-input",type:"text"},domProps:{value:e.$v.recipeCookingStep.step_details.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.recipeCookingStep.step_details,"$model",t.target.value)}}}),e.$v.recipeCookingStep.step_details.$error?r("div",[e.$v.recipeCookingStep.step_details.required?e._e():r("div",{staticClass:"form-feedback-error"},[e._v(" Cook Step Details are required ")])]):e._e()]),r("input",{attrs:{"data-test":"add-cook-step-button",type:"submit",value:"Add"},on:{click:function(t){return t.preventDefault(),e.addCookStep(t)}}}),r("transition",{attrs:{name:"fade"}},[e.added?r("div",{staticClass:"alert",attrs:{"data-test":"cook-step-added-confirmation"}},[e._v(" Your recipe cook step was added! ")]):e._e()])],1)},ae=[],oe={data:function(){return{added:!1,recipeCookingStep:{recipe_slug:"",step_details:"",step_number:""},nextStep:0}},validations:function(){return{recipeCookingStep:{recipe_slug:{required:J["required"],exists:function(e){return null!=this.$store.getters.getRecipeBySlugForForm(e)&&this.$store.getters.getRecipeBySlugForForm(e)}},step_number:{required:J["required"],integer:J["integer"],isNextStep:function(e){return this.nextStep=parseInt(this.$store.getters.getNextRecipeCookingStepNumberBySlug(this.recipeCookingStep.recipe_slug),10)+1,e==this.nextStep}},step_details:{required:J["required"]}}}},methods:{addCookStep:function(){var e=this;this.$v.$touch(),0==this.$v.$anyError&&A.add("recipe_cooking_steps",this.recipeCookingStep).then((function(t){t.includes("Error")?alert(t):(e.$v.$reset(),e.added=!0,setTimeout((function(){return e.added=!1}),3e3),e.recipeCookingStep={recipe_slug:"",step_details:" ",step_number:0})}))}}},se=oe,ue=(r("207d"),Object(u["a"])(se,ne,ae,!1,null,"5671685b",null)),ce=ue.exports,pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"favorites-list-page"}},[r("h1",[e._v("Your Favorites")]),0==e.items.length?r("div",[e._v("No items")]):e._e(),e.recipes?r("ul",{staticClass:"cleanList",attrs:{"data-test":"favorites-content"}},e._l(e.items,(function(t){return r("li",{key:t.slug},[e._v(" "+e._s(e.getRecipeDetails(t.slug).name)+" "),r("button",{attrs:{"data-test":"remove-from-favorites-link"},on:{click:function(r){return e.removeFromFavoritesList(t.slug)}}},[e._v("Remove")])])})),0):e._e()])},le=[],de=(r("b64b"),{data:function(){return{items:[],favoritesList:null}},mounted:function(){this.favoritesList=new B,this.items=this.favoritesList.getItems()},methods:{getRecipeDetails:function(e){for(var t=0,r=Object.keys(this.recipes);t<r.length;t++){var i=r[t];if(this.recipes[i].slug==e)return this.recipes[i]}},removeFromFavoritesList:function(e){this.favoritesList.remove(e)}},computed:{recipes:function(){return this.$store.state.recipes}}}),me=de,ge=Object(u["a"])(me,pe,le,!1,null,null,null),ve=ge.exports,fe=r("2f62"),_e=r("2ef0");i["a"].use(fe["a"]);var $e=new fe["a"].Store({state:{recipes:[],ingredients:[],cookSteps:[],nutriInfo:[]},mutations:{updateRecipes:function(e,t){e.recipes=t},updateIngredients:function(e,t){e.ingredients=t},updateCookSteps:function(e,t){e.cookSteps=t},updateNutriInfo:function(e,t){e.nutriInfo=t}},actions:{setDatabase:function(e){A.all("recipes").then((function(t){e.commit("updateRecipes",t)})),A.all("receipe_ingredients").then((function(t){e.commit("updateIngredients",t)})),A.all("recipe_cooking_steps").then((function(t){e.commit("updateCookSteps",t)})),A.all("nutritional_Info").then((function(t){e.commit("updateNutriInfo",t)}))}},getters:{getRecipeBySlug:function(e){return function(t){console.log("Store getRecipeBySlug :"+t);for(var r=0,i=Object.keys(e.recipes);r<i.length;r++){var n=i[r];if(console.log(t+": "+e.recipes[n].slug),e.recipes[n].slug==t)return console.log(t+"= "+e.recipes[n].slug),e.recipes[n]}}},getRecipeBySlugForForm:function(e){return function(t){var r=null;console.log("Store getRecipeBySlug :"+t);for(var i=0,n=Object.keys(e.recipes);i<n.length;i++){var a=n[i];console.log(t+": "+e.recipes[a].slug),e.recipes[a].slug==t&&(console.log(t+"= "+e.recipes[a].slug),r=e.recipes[a])}return r}},getRecipeIngredientsBySlug:function(e){return function(t){var r=[];console.log("Store getRecipeIngredientsBySlug");for(var i=0,n=Object.keys(e.ingredients);i<n.length;i++){var a=n[i];e.ingredients[a].recipe_slug==t&&r.push(e.ingredients[a])}return r}},getRecipeCookingStepsBySlug:function(e){return function(t){var r=[];console.log("Store getRecipeCookingStepsBySlug");for(var i=0,n=Object.keys(e.cookSteps);i<n.length;i++){var a=n[i];e.cookSteps[a].recipe_slug==t&&r.push(e.cookSteps[a])}return _e.sortBy(r,["step_number"])}},getNextRecipeCookingStepNumberBySlug:function(e){return function(t){var r=0;console.log("Store getRecipeCookingStepsBySlug");for(var i=0,n=Object.keys(e.cookSteps);i<n.length;i++){var a=n[i];e.cookSteps[a].recipe_slug==t&&e.cookSteps[a].step_number>r&&(r=e.cookSteps[a].step_number)}return r}},getRecipeNutriInfoBySlug:function(e){return function(t){console.log("Store getRecipeNutriInfoBySlug");for(var r=0,i=Object.keys(e.nutriInfo);r<i.length;r++){var n=i[r];if(e.nutriInfo[n].recipe_slug==t)return e.nutriInfo[n]}}}}});i["a"].use(d.a),i["a"].use(m["a"]),i["a"].config.productionTip=!1;var be=[{path:"/",component:q,name:"home"},{path:"/recipes",component:x,name:"recipes"},{path:"/recipe/:slug",component:z,name:"recipe",props:!0},{path:"/Recipes/create",component:W,name:"add a recipe"},{path:"/Recipes/Ingredient/create",component:ie,name:"add an ingredient"},{path:"/Recipes/CookStep/create",component:ce,name:"add a cook step"},{path:"/favorites",component:ve,name:"favorites"}],he=new m["a"]({routes:be,mode:"history"});new i["a"]({store:$e,router:he,render:function(e){return e(p)}}).$mount("#app")},5921:function(e,t,r){"use strict";var i=r("2552"),n=r.n(i);n.a},"5c0b":function(e,t,r){"use strict";var i=r("9c0c"),n=r.n(i);n.a},"7b74":function(e,t,r){e.exports=r.p+"img/creole-shrimp-saute.68033d90.jpg"},"82a1":function(e,t,r){e.exports=r.p+"img/image-not-available.549b729b.jpg"},"8a7b":function(e,t,r){},"9c0c":function(e,t,r){},a221:function(e,t,r){e.exports=r.p+"img/tasty-turkey-chili.28e6fe19.jpg"},a788:function(e,t,r){},b372:function(e,t,r){e.exports=r.p+"img/crunchy-cranberry-waldorf-salad.b818c163.jpg"},bc62:function(e,t,r){e.exports=r.p+"img/lasagna-soup-insalata.7361ef75.jpg"},ca62:function(e,t,r){var i={"./creole-shrimp-saute.jpg":"7b74","./crunchy-cranberry-waldorf-salad.jpg":"b372","./hearty-potato-and-lentil-salad.jpg":"e9ac","./image-not-available.jpg":"82a1","./lasagna-soup-insalata.jpg":"bc62","./tasty-turkey-chili.jpg":"a221"};function n(e){var t=a(e);return r(t)}function a(e){if(!r.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=a,e.exports=n,n.id="ca62"},de44:function(e,t,r){"use strict";var i=r("a788"),n=r.n(i);n.a},dedd:function(e,t,r){e.exports=r.p+"img/recipebook-logo.82e1a007.jpg"},e9ac:function(e,t,r){e.exports=r.p+"img/hearty-potato-and-lentil-salad.d7a623e8.jpg"}});
//# sourceMappingURL=app.1f2fc5a5.js.map