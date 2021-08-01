<template>
    <div class="calc">
        {{ title }}
        <div class="calcForm">
            <input type="text" v-model="operand1">
            <input type="text" v-model="operand2">
            = {{ result }}
            <div class="error" v-if="error">{{ error }}</div>

            <div class="buttons">
                <button v-for="operation in operations" :key="operation" @click="calculate(operation)">
                    {{ operation }}
                </button>
            </div>

            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">Отобразить экранную клавиатуру</label>

            <div v-if="checked">
                <div class="keyboard">
                    <button v-for="(btn, index) in keyboardButtons" :key='index' @click="addNumberToInput(btn)">
                        {{ btn }}
                    </button>
                    <button @click="deleteNumberFromInput">Del</button>
                </div>
                
                <div>
                    <input type="radio" id="one" value="operand1" v-model="picked" change>
                    <label for="one">Операнд 1</label>
                    <input type="radio" id="two" value="operand2" v-model="picked">
                    <label for="two">Операнд 2</label>
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
            title: 'Калькулятор',
            operand1: '',
            operand2: '',
            result: 0,
            operations: ['Сложение', 'Вычитание', 'Произведение', 'Деление', 'Возведение в степень', 'Целочисленное деление'],
            keyboardButtons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            error: '',
            logs: {},
            checked: false,
            picked: 'operand1',
        }
    },
    methods: {
        calculate(operation) {
            this.error = '';
            switch (operation) {
                case 'Сложение':
                    this.sum();
                    break;
                case 'Вычитание':
                    this.sub();
                    break;
                case 'Произведение':
                    this.mul();
                    break;
                case 'Деление':
                    this.div();
                    break;
                case 'Возведение в степень':
                    this.degree();
                    break;
                case 'Целочисленное деление':
                    this.intDiv();
                    break;
            }

            const key = Date.now();
            const value = `${this.operand1} ${operation} ${this.operand2} = ${this.result}`;
            this.$set(this.logs, key, value);
            // this.logs[Date.now()] = `${this.operand1} ${operation} ${this.operand2} = ${this.result}`;
            // console.log(this.logs);
        },
        sum() {
            this.result = +this.operand1 + +this.operand2;
        },
        sub() {
            this.result = this.operand1 - this.operand2;
        },
        mul() {
            this.result = this.operand1 * this.operand2;
        },
        div() {
            if (this.operand2 == 0) {
                this.error = 'На 0 делить нельзя!';
            } else {
                this.result = this.operand1 / this.operand2;
            }
        },
        degree() {
            this.result = Math.pow(this.operand1, this.operand2);
        },
        intDiv() {
            if (this.operand2 == 0) {
                this.error = 'На 0 делить нельзя!';
            } else {
                this.result = Math.round(this.operand1 / this.operand2);
            }
        },
        addNumberToInput(number) {
            if (this.picked === 'operand1') {
                this.operand1 += number;
            } else {
                this.operand2 += number;
            }
        },
        deleteNumberFromInput() {
            if (this.picked === 'operand1') {
                this.operand1 = this.operand1.slice(0, -1);
            } else {
                this.operand2 = this.operand2.slice(0, -1);
            }
        },
    },
    computed: {

    },
}
</script>

<style>
    .calcForm {
        margin-top: 10px;
    }
    .error {
        color:red;
    }
    .buttons {
        margin: 10px 0;
    }
    button {
        margin: 5px;
    }
    .keyboard {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
</style>
