import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {//ambilDataDariBackend
    ambilDataDariBackend(state){
      fetch("http://192.168.1.8:3000/homepage").then(result=>{//pasar
        result.json().then(dataObject=>{
          state.commit("taruhDataKeGudang",dataObject)
          // state.gudang = dataObject
        })
      })
    }
  },
  
  mutations: {//penjaga gudang, tukang
    taruhDataKeGudang(state,value){
      state.gudang=value
    }
  },
  
  state: {//gudang barang
    gudang:{
      "header": {
        "menus": [],
        "carrousel": []
      },
      "content": [],
      "info": {}
    }
  },
   
  getters:{//toko, buat liat dt
    lihatMenu(state){return state.gudang.header.menus},
    lihatCarrousel(state){return state.gudang.header.carrousel},
    lihatContent(state){return state.gudang.content},
    lihatInfo(state){return state.gudang.info},
  },
  modules: {
  }
})
