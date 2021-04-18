import Vue from 'vue'

import moment from 'moment';

Vue.filter('timeFormet', (arg)=>{
   return moment().format("MMM Do YY"); 
});