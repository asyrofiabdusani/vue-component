<template>
    <div>
        <h4 class="color">Lorem, ipsum dolor.</h4>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "ChildStyleVue",
};
</script>

<style>
.color {
    color: blue;
}
</style>
