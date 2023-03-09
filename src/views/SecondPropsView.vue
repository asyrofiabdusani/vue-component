<template>
    <div>
        <h1>Vue Second Props</h1>
        <h2>
            Basically, we can decide type of data in the props sent, setting
            required, and set the default value for the props
        </h2>
        <VueSecondProps title="Lorem ipsum" :published="false" />
        <VueSecondProps title="Lorem ipsum 2" :likes="20" :published="true" />

        <hr />
        <h2>
            We can pass attribute (id, class) to the component, and catch with
            v-bind:'$attrs'. But we also must declare inheritAttrs to false, so
            the attribute willn not bind into parent
        </h2>
        <VueSecondProps title="Lorem ipsum 2" id="articleId" />
    </div>
</template>

<script>
import VueSecondProps from "@/components/VueSecondProps.vue";

export default {
    name: "SecondPropsView",
    components: {
        VueSecondProps,
    },
};
</script>

<style lang="scss" scoped></style>
