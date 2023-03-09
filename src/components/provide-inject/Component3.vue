<template>
    <div>
        <p>This is component 3</p>
        <p>
            And this is injected value = <b>{{ injectedValue }}</b>
        </p>
    </div>
</template>

<script>
export default {
    name: "Component3Vue",
    inject: ["injectedValue"],
};
</script>

<style lang="scss" scoped></style>
