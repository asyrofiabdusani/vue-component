<template>
    <div>
        <h2>Pop Up 2</h2>
        <input type="text" v-model="name" />
        <button @click="$emit('close', name)">Close popup</button>
    </div>
</template>

<script>
export default {
    name: "Popup2Vue",
    emits: {
        close: (name) => {
            if (!name) {
                return false;
            } else {
                return true;
            }
        },
    },
    data() {
        return {
            name: "",
        };
    },
};
</script>

<style lang="scss" scoped></style>
