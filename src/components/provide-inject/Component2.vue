<template>
    <div>
        <p>This is component 2</p>
        <Component3 />
    </div>
</template>

<script>
import Component3 from "./Component3.vue";
export default {
    name: "Component2Vue",
    components: {
        Component3,
    },
};
</script>

<style lang="scss" scoped></style>
