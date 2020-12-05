import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false,
        listMenu: [

        ]
    },
    mutations: {
        KONFIRMASI_MENU: (state, menu) => {
            state.listMenu.push(menu)
        }
    },
    actions: {
        simpanMenu({ commit, state }, menu ) {
            setTimeout(() => {
                commit('KONFIRMASI_MENU', menu)
                state.isLoading = false            
            }, 1500)
        }          
    }
})