<template>
    <div>
        <p>This is component 1</p>
        <Component2 />
    </div>
</template>

<script>
import Component2 from "./Component2.vue";
export default {
    name: "Component1Vue",
    components: {
        Component2,
    },
};
</script>

<style lang="scss" scoped></style>
