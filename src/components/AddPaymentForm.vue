<template>
    <div>
        <button @click="show = !show">Add new cost</button>
        <div class="form" v-if="show">
            <input type="text" placeholder="Date" v-model="date">
            <!-- <input type="text" placeholder="Category" v-model="category"> -->
            <select v-model="category">
                <option v-for="option in options" :key="option" :value="option">
                    {{ option }}
                </option>
            </select>
            <div class="addCategory">
                <input type="text" v-model="categoryAdded" placeholder="Add category">
                <button @click="addCategory">Add category</button>
            </div>
            <input type="number" placeholder="Value" v-model.number="value">
            <button @click="onSave">S a v e</button>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'AddPaymentForm',
    data() {
        return {
            date: '',
            category: '',
            value: '',
            categoryAdded: '',
            show: false,
        }
    },
    computed: {
        getCurrentDate() {
            const today = new Date();
            const d = today.getDate();
            const m = today.getMonth() + 1;
            const y = today.getFullYear();
            return `${d}.${m}.${y}`;
        },
        options() {
            return this.$store.getters.getCategories;
        },
    },
    methods: {
        ...mapActions([
            'fetchCategoryList'
        ]),
        onSave() {
            const data = {
                date: this.date || this.getCurrentDate,
                category: this.category,
                value: +this.value,
                id: this.$store.state.paymentsList.length + 1,
            };
            this.$emit('addNewPayment', data);
        },
        addCategory() {
            if (!this.categoryAdded) return;
            this.$store.commit('addCategoryToList', this.categoryAdded);
            this.categoryAdded = '';
        },
    },
    created() {
        this.fetchCategoryList();
    },
}
</script>

<style lang="scss">
button {
    width: 250px;
    padding: 7px;
    background-color: #19bd94;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 4px 5px 10px rgb(0 0 0 / 22%);
    text-transform: uppercase;
    margin-bottom: 20px;
}
.form {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
}
input, select {
    padding: 10px;
    border: 1px solid grey;
    border-radius: 5px;
    box-shadow: 4px 5px 10px rgb(0 0 0 / 22%);
    color: grey;
}
input:focus, select:focus {
    outline: none;
}
.form button {
    width: 60%;
    align-self: flex-end;
}
.addCategory {
    position: absolute;
    width: 180px;
    top: 25px;
    left: 320px;
}
.addCategory button {
    margin-top: 5px;
    width: 202px;
}
.addCategory input {
    width: 100%;
    // padding: 0;
}
</style>
