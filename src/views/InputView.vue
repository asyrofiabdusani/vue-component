<template>
    <div>
        <h1>Input View With Send V-Model</h1>
        <h2>
            If we want to pass v-model as props, in the component must catch
            with modelValue variable props.
        </h2>
        <input type="text" v-model="inputName" />
        <VueInput v-model="inputName" />
    </div>
    <hr />
    <div>
        <input type="text" v-model="inputSomething" />
        <button @click="isShown = true">Show result</button>
        <VueCatchModel v-show="isShown" v-model="inputSomething" />
    </div>
</template>

<script>
import VueInput from "@/components/VueInput.vue";
import VueCatchModel from "@/components/VueCatchModel.vue";

export default {
    name: "InputView",
    components: {
        VueInput,
        VueCatchModel,
    },
    data() {
        return {
            inputName: "",
            inputSomething: "",
            isShown: false,
        };
    },
};
</script>

<style lang="scss" scoped></style>
