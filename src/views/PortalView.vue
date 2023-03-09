<template>
    <div>
        <h1>Portal Component</h1>
        <h2>
            Used to move the component to other components <br />Steps: <br />1.
            Create another root component in the index <br />2. using teleport
            tag to move to the specific ID in the html that was made
        </h2>
    </div>
    <teleport to="#portal-root">
        <PortalVue />
    </teleport>
</template>

<script>
import PortalVue from "@/components/PortalVue.vue";
export default {
    name: "PortalView",
    components: { PortalVue },
};
</script>

<style lang="scss" scoped></style>
