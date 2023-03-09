<template>
    <div>
        <p>
            Hello my name {{ name }}. I am {{ age }} years old, and I come from
            {{ city }}
        </p>
    </div>
</template>

<script>
export default {
    name: "VuePorps",
    props: ["name", "city", "age"],
};
</script>

<style lang="scss" scoped></style>
