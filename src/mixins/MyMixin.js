export const MyMixin = {
    data() {
        return {
            input2: ''
        }
    },

    computed: {
        addTxtLength() {
            return this.input2.concat(` (${this.input2.length})`)
        }
    }
};
