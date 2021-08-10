<template>
    <div class="pagination">
        <div class="page" @click="onClick(cur - 1)">Prev</div>
        <div class="page" v-for="page in amount" :key="page" @click="onClick(page)">
            {{ page }}
        </div>
        <div class="page" @click="onClick(cur + 1)">Next</div>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        length: Number,
        n: {
            type: Number,
            default: 5,
        },
        cur: Number,
    },
    computed: {
        amount() {
            return Math.ceil(this.length / this.n);
        }
    },
    methods: {
        onClick(page) {
            if (page < 1 || page > this.amount) {
                return
            } else {
                this.$emit('changePage', page);
            }
        },
    },
}
</script>

<style scoped lang="scss">
.pagination {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    width: 600px;
    display: flex;
    justify-content: center;
}
.page {
    cursor: pointer;
    padding: 3px 7px;
}
</style>