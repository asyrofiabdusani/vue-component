<template>
    <div>
        <h1>Custom Event Component</h1>
        <h2>
            when we want to manipulate data from component to another component
            <br />
            1. using emit in the components sender -> emit also can be given
            validation <br />
            2. listen event in the component receiver
        </h2>
        <p>Just got static value from component</p>
        <button @click="isShow = true">Show Pop Up 1</button>
        <PopupVue v-show="isShow" @hide="closePopUp1" />
        <hr />
        <p>Just got dynamic value from component</p>
        <button @click="isShow2 = true">Show Pop Up 2</button>
        <Popup2Vue v-show="isShow2" @close="closePopUp2" />
    </div>
</template>

<script>
import PopupVue from "@/components/custom-event/PopupVue.vue";
import Popup2Vue from "@/components/custom-event/Popup2Vue.vue";
export default {
    name: "CustomEventView",
    components: {
        PopupVue,
        Popup2Vue,
    },
    data() {
        return {
            isShow: false,
            isShow2: false,
        };
    },
    methods: {
        closePopUp1(name) {
            (this.isShow = false), console.log("name", name);
        },
        closePopUp2(name) {
            (this.isShow2 = false), console.log("name", name);
        },
    },
};
</script>

<style lang="scss" scoped></style>
