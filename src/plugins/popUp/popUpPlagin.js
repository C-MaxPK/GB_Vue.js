export default {
    install(Vue) {
        if (this.installed) {
            return
        }
        this.installed = true;

        Vue.prototype.$popUp = {
            EventBus: new Vue(),
            showPopUp(name, settings) {
                this.EventBus.$emit("popUp", {
                    name,
                    ...settings
                });
            },
            hidePopUp() {
                this.EventBus.$emit("hideUp")
            }
        }
    }
}