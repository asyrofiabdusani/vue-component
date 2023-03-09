<template>
    <div>
        <h1>This is provide and inject component for multiple layers</h1>
        <h2>
            Steps : <br />
            1. provide value in the component root <br />
            2. inject value in the component
        </h2>
        <p>
            The provided value is <b>{{ injectedValue }}</b>
        </p>
        <Component1 />
    </div>
</template>

<script>
import Component1 from "@/components/provide-inject/Component1.vue";
export default {
    name: "ProvideInjectView",
    components: {
        Component1,
    },
    data() {
        return {
            injectedValue: "Value of provide",
        };
    },
    provide() {
        return {
            injectedValue: this.injectedValue,
        };
    },
};
</script>

<style lang="scss" scoped></style>
