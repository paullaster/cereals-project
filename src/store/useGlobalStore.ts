import { defineStore } from "pinia";

export const useGlobalStore = defineStore('global', {
    state: () => ({
        isDark: false,
    }),
    getters: {
        isDark: (state) => state.isDark,
    },
    actions: {
        toggleDark(){
            this.$patch({
                isDark: !this.isDark,
            })
        },
    },
});