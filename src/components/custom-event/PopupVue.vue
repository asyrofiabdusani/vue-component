<template>
    <div>
        <h2>Pop Up 1</h2>
        <button @click="$emit('hide', 'Budi')">Close popup</button>
    </div>
</template>

<script>
export default {
    name: "PopupVue",
    emits: ["hide"],
};
</script>

<style lang="scss" scoped></style>
