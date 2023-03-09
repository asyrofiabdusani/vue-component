<template>
    <div>
        <h1>Vue Props</h1>
        <h2>
            The props will not throw error even we don't send the props from
            component sender
        </h2>
        <VueProps name="Budi" />
        <VueProps name="Setiawan" age="29" />
        <VueProps name="Jonathan" age="30" city="Jakarta" />

        <h2>Here are if we want to pass data for props</h2>
        <VueProps :name="name" :age="age" :city="city" />
    </div>
</template>

<script>
import VueProps from "@/components/VueProps.vue";
export default {
    name: "PropsView",
    data() {
        return {
            name: "Basuki",
            age: 29,
            city: "Bekasi",
        };
    },
    components: {
        VueProps,
    },
};
</script>

<style lang="scss" scoped></style>
