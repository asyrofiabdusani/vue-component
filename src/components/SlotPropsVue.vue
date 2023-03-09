<template>
    <div v-for="name in names" :key="name.firstName">
        <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
    </div>
</template>

<script>
export default {
    name: "SlotPropsVue",
    data() {
        return {
            names: [
                {
                    firstName: "Billy",
                    lastName: "Jean",
                },
                {
                    firstName: "Edwards",
                    lastName: "Chow",
                },
                {
                    firstName: "Jackie",
                    lastName: "Son",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
