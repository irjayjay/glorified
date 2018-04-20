import Vuex from 'vuex'
import actions from './store/actions'
import getters from './store/getters'
import mutations from './store/mutations'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count:0,
    },
    actions: { ...actions },
    getters: { ...getters },
    mutations: { ...mutations },
})