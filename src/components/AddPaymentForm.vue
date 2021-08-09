<template>
    <div>
        <button @click="show = !show">Add new cost</button>
        <div class="form" v-if="show">
            <input type="text" placeholder="Date" v-model="date">
            <input type="text" placeholder="Category" v-model="category">
            <input type="number" placeholder="Value" v-model.number="value">
            <button @click="onSave">S a v e</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddPaymentForm',
    data() {
        return {
            date: '',
            category: '',
            value: '',
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
    },
    methods: {
        onSave() {
            const data = {
                date: this.date || this.getCurrentDate,
                category: this.category,
                value: +this.value,
            };
            this.$emit('addNewPayment', data);
        },
    },
}
</script>

<style lang="scss">
button {
    width: 30%;
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
}
input {
    padding: 10px;
    border: 1px solid grey;
    border-radius: 5px;
    box-shadow: 4px 5px 10px rgb(0 0 0 / 22%);
}
input:focus {
    outline: none;
}
.form button {
    width: 60%;
    align-self: flex-end;
}
</style>
