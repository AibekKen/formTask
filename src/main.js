// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)




/* eslint-disable no-new */
new Vue({
   el: '#app',
   components: { App },
   template: '<App/>'
})

function toTyped() {
   const inputs = document.querySelectorAll(".input");
   const selects = document.querySelectorAll('select');
   inputs.forEach((input) =>
      input.addEventListener("change", () => {
         input.classList.add("typed")
         input.classList.remove("err")
         if (input.value == '') {
            input.classList.remove("typed")
         }
      })

   );
   selects.forEach((select) =>
      select.addEventListener("change", () => {
         select.classList.add("typed")
         select.classList.remove("err")
         if (select.value == '') {
            select.classList.remove("typed")
         }
      })
   );
}

toTyped();

Vue.config.devtools = true;