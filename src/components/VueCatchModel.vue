<template>
    <div>
        <h5>The result is = {{ modelValue }}</h5>
    </div>
</template>

<script>
export default {
    name: "VueCatchModel",
    props: {
        modelValue: String,
    },
};
</script>

<style lang="scss" scoped></style>
