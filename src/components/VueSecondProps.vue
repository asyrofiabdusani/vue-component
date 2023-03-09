<template>
    <div>
        <p v-bind="$attrs">
            The article with title {{ title }} got {{ likes }} likes and it has
            {{ published ? "been" : "no" }} published
        </p>
    </div>
</template>

<script>
export default {
    name: "VueSecondProps",
    props: {
        title: {
            type: String,
            required: true,
        },
        likes: {
            type: Number,
            default: 0,
        },
        published: Boolean,
    },
    inheritAttrs: false,
};
</script>

<style lang="scss" scoped></style>
