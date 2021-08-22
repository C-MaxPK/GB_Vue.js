import Vue from "vue"
import Vuex from "vuex"

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
        fetchData({
            commit,
        }) {

            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = [];
                    for (let i = 1; i < 10; i++) {
                        items.push({
                            id: i,
                            date: '20/08/2021',
                            category: 'Auto',
                            value: 110
                        });
                    }
                    resolve(items.reverse())
                }, 2000)
            }).then(res => {
                commit('setPaymentListData', res);
            })
        },
        fetchCategory({
            commit
        }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(['Food', 'Sport', 'Education', 'Auto', 'Health', 'Family'])
                }, 1000)
            }).then(res => {
                commit('setCategoryList', res)
            })
        }

    }

});