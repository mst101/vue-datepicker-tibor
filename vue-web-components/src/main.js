import Vue from 'vue'
import wrap from '@vue/web-component-wrapper';

// load components
import Datepicker from "./components/Datepicker";

Vue.config.productionTip = false

window.customElements.define('web-datepicker', wrap(Vue, Datepicker));