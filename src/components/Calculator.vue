<template>
    <div class="calc">
        {{ message }}
        <div>
            <input type="number" v-model.number="operand1">
            <input type="number" v-model.number="operand2">
            = {{ result }}
            <div class="keyboard">
                <button @click="result = operand1 + operand2">Сложение</button>
                <button @click="sub">Вычитание</button>
                <button v-on:click="mul(operand1, operand2)">Произведение</button>
                <button v-if="operand2 == 0" disabled>Деление</button>
                <button v-else @click="result = operand1 / operand2">Деление</button>
                <div>
                    <button @click="degree">Возведение в степень</button>
                    <button v-if="operand2 == 0" disabled>Целочисленное деление</button>
                    <button v-else @click="div">Целочисленное деление</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calculator',
    data() {
        return {
            message: 'Калькулятор',
            operand1: 0,
            operand2: 0,
            result: 0,
        }
    },
    methods: {
        sub() {
            this.result = this.operand1 - this.operand2;
        },
        mul(op1, op2) {
            this.result = op1 * op2;
        },
        degree() {
            this.result = Math.pow(this.operand1, this.operand2);
        },
        div() {
            this.result = Math.round(this.operand1 / this.operand2);
        },
    },
}
</script>

<style>
    button {
        margin: 5px;
    }
</style>