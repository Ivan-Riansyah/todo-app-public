import Vue from "vue";
import Vuex from "vuex";

//project
import todos from "./modules/todos/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		todos,
	},
	strict: true,
});
