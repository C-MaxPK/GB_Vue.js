'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store ({
    state: {
        paymentsList: [],
        categories: [],
    },
    mutations: {
        setPaymentListData(state, payload) {
            state.paymentsList = payload;
        },
        addDataToPaymentList(state, payload) {
            state.paymentsList.push(payload);
        },
        setCategoriesListData(state, payload) {
            state.categories = payload;
        },
        addCategoryToList(state, payload) {
            state.categories.push(payload);
        },
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((result, current) => result + current.value, 0);
        }, // подсчет общей суммы расходов
        getCategories: state => state.categories,
    },
    actions: {
        fetchData({commit}) {
            return new Promise((resolve) => {
                setTimeout(()=> {
                    const items = [];
                    for (let i = 0; i < 3; i++) {
                        items.push({
                            date: '10.08.2021',
                            category: 'Sport',
                            value: i,
                            id: i + 1,
                        });
                    }
                    resolve(items);
                }, 2000);
            })
            .then(res => commit('setPaymentListData', res));
        },
        fetchCategoryList({commit}) {
            return new Promise((resolve) => {
                setTimeout(()=> {
                    const categories = ['Sport', 'Food', 'Education', 'Interner', 'Other'];
                    resolve(categories);
                }, 2000);
            })
            .then(res => commit('setCategoriesListData', res));
        },
    },
});
