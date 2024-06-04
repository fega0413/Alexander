// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {      
        
        primary: '#184471', 
        secondary: '#50778D',
        accent: '#ee0e0e',
        gradient: '#0068BD',

        "layout-appbar__appbar": "#093157",
        
        /*
        primary: '#AB260A', 
        secondary: '#FF6333',
        accent: '#3498db',
        gradient: '#FF6333',

        "layout-appbar__appbar": "#D82A12",
        */
       // "layout-appbar__appbar": "#FFFFFF",
      },
      dark: {
        primary: '#50778D',
        secondary: '#0B1C3D',
        accent: '#204165',
        gradient: '#0068BD',
        "layout-appbar__appbar": "#093157",
      },
    },
  },
})
