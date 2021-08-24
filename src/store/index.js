import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({

    //Базовые данные в хранилеще хранятся в объекте state
    state: {
        paymentsList: [],
        categoryList: [],
    },

    //Изменения и действия с хранилищем записываются в мутациях
    mutations: {
        setPaymentListData(state, payload) {
            state.paymentsList = payload;

        },
        addDataToPaymentList(state, payload) {
            state.paymentsList.unshift(payload);
        },
        deletePayment(state, payload) {
            state.paymentsList.splice(payload, 1)
        },
        changePayment(state, payload, ) {
            state.paymentsList.splice(payload.idx, 1, payload.item);
        },
        updatePaymentList(state, payload) {
            state.paymentsList = payload;
        },
        addNewCategory(state, payload) {
            state.categoryList.push(payload);
        },
        setCategoryList(state, payload) {
            state.categoryList = payload;
        }
    },

    //Получение данных

    getters: {
        getPaymentList: state => state.paymentsList,
        getFullPrise: state => {
            return state.paymentsList.reduce((acc, cur) => acc + cur.value, 0);
        },
        getCategory: state => state.categoryList
    },

    // Ассинхронные действия с хранилищем, запускающие мутации

    actions: {
        async fetchData({
            commit,
        }) {

            const {
                data
            } = await axios.get('https://cost-vue-default-rtdb.firebaseio.com/payments.json');
            console.log(data)
            data.reverse()

            setTimeout(() => {
                commit('setPaymentListData', data);
            }, 1000)


        },

        async fetchCategory({
            commit
        }) {
            const {
                data
            } = await axios.get('https://cost-vue-default-rtdb.firebaseio.com/categorys.json');

            commit('setCategoryList', data);

        }

    }

});