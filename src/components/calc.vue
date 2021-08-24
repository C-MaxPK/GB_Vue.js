<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <input
        name="operand1"
        v-model.number="operand1"
        type="text"
        placeholder="Число 1"
      />
      <input
        name="operand2"
        v-model.number="operand2"
        type="text"
        placeholder="Число 2"
      />
      <p v-if="infinity">На ноль делить нельзя</p>
      <h3>Результат: {{ result }}</h3>
    </div>
    <div>
      <button name="+" @click="add">+</button>
      <button name="-" @click="substract">-</button>
      <button name="*" @click="multiply">*</button>
      <button name="/" @click="divide">/</button>
      <button name="degree" class="spec" @click="exponentiation">
        Число 1 в степени числа 2
      </button>

      <button name="zero%" @click="result = Math.floor(+operand1 / +operand2)">
        % (деление без остатка)
      </button>
    </div>
    <div>
      <label for="keyboard">Включить экранную клавиатуру</label>
      <input type="checkbox" name="keyboard" v-model="checked" />
    </div>
    <div class="keyShow" v-if="checked">
      <ul>
        <li @click="type(item)" v-for="item in keyboard" :key="item">
          {{ item }}
        </li>
        <button name="delete" @click="deleteNum">del</button>
      </ul>

      <form>
        <label class="operand1">
          Операнд1
          <input
            name="operan11"
            v-model="choseOperand"
            type="radio"
            value="operand1"
        /></label>

        <!-- <label class="operand">
          Операнд2
          <input
            name="operand2"
            v-model="choseOperand"
            type="radio"
            value="operand2"
          />
        </label> -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    focus() {
      if (this.choseOperand === "operand1") {
        return "operand1";
      } else if (this.choseOperand === "operand2") {
        return "operand2";
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      title: "Калькулятор",
      operand1: "",
      operand2: "",
      result: 0,
      infinity: false,
      keyboard: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      checked: true,
      choseOperand: null,
    };
  },
  methods: {
    deleteNum() {
      if (this.choseOperand === "operand1") {
        this.operand1 = this.operand1.slice(0, -1);
      } else if (this.choseOperand === "operand2") {
        this.operand2 = this.operand2.slice(0, -1);
      }
    },
    type(item) {
      if (this.choseOperand === "operand1") {
        this.operand1 += item;
      } else if (this.choseOperand === "operand2") {
        this.operand2 += item;
      }
    },
    add() {
      this.toNumber();
      this.result = this.operand1 + this.operand2;
      this.toStringg();
    },
    substract() {
      this.toNumber();
      this.result = this.operand1 - this.operand2;
      this.toStringg();
    },
    divide() {
      this.toNumber();
      if (this.operand2 === 0) {
        this.infinity = true;
        this.result = "";
      } else {
        this.result = this.operand1 / this.operand2;
      }
      this.toStringg();
    },
    multiply() {
      this.toNumber();
      this.result = this.operand1 * this.operand2;
      this.toStringg();
    },
    exponentiation() {
      this.toNumber();
      this.result = Math.pow(this.operand1, this.operand2);
      this.toStringg();
    },
    remainder() {
      this.toNumber();
      if (this.operand2 === 0) {
        this.infinity = true;
        this.result = "";
      } else {
        this.result = Math.floor(this.operand1 / this.operand2);
      }
      this.toStringg();
    },
    toNumber() {
      this.operand1 = parseInt(this.operand1);
      this.operand2 = parseInt(this.operand2);
    },
    toStringg() {
      this.operand1 = this.operand1.toString();
      this.operand2 = this.operand2.toString();
    },
  },
};
</script>

<style scoped>
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Open Sans", sans-serif;
}
#app {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.container {
  width: 1000px;
  height: 500px;
  margin: 0 auto;
  border: 2px solid rgb(15, 160, 88);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}
h1,
h3 {
  text-align: center;
  margin-bottom: 15px;
}
h3 {
  margin-top: 10px;
}
.operands {
  width: 350px;
  margin: 0 auto;
}
.buttons {
  width: 500px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
}
.btn {
  font-weight: bold;
  width: 20px;
}
.keyboard {
  display: flex;
  margin: 20px auto;
}
.keyboard input {
  margin-top: 5px;
  margin-left: 13px;
}
.keyboard-list {
  list-style: none;
  display: flex;
  margin: 20px auto;
}
.keyboard-list-item,
.btn,
.spec {
  height: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid;
  background-color: rgb(34, 165, 93);
  color: white;
}
.keyboard-list-item {
  width: 25px;
}
.keyboard-list-item:not(:first-child) {
  margin-left: 5px;
}
.keyShow {
  margin: 0 auto;
}
form {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.operand:first-child {
  margin-right: 15px;
}
.operand:hover {
  cursor: pointer;
  border-bottom: 2px solid rgb(34, 165, 93);
}
button:not(:first-child) {
  margin-left: 5px;
}
button:active,
.btn:active,
.spec:active .keyboard-list-item:active {
  box-shadow: 1px 1px 3px rgb(34, 165, 93);
} */
</style>