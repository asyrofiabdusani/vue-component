<template>
    <div>
        <h1>Props For Slot</h1>
        <h2>We can use props to manipulate data in the slot component.</h2>
        <SlotPropsVue>
            <template v-slot:default="props">
                {{ props.lastName }}
            </template>
        </SlotPropsVue>
    </div>
</template>

<script>
import SlotPropsVue from "@/components/SlotPropsVue.vue";
export default {
    name: "SlotPropsView",
    components: {
        SlotPropsVue,
    },
};
</script>

<style lang="scss" scoped></style>
