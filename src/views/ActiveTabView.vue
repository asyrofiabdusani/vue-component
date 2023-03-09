<template>
    <div>
        <h1>Set Active Tab</h1>
        <h2>
            To set active tab, create event to declare them and then set active
            tab in the keep-alive tag
        </h2>
        <button @click="activeTab = 'TabA'">Tab A</button>
        <button @click="activeTab = 'TabB'">Tab B</button>
        <button @click="activeTab = 'TabC'">Tab C</button>
        <keep-alive>
            <component :is="activeTab" />
        </keep-alive>
    </div>
</template>

<script>
import TabA from "@/components/active-tab/TabA.vue";
import TabB from "@/components/active-tab/TabB.vue";
import TabC from "@/components/active-tab/TabC.vue";
export default {
    name: "ActiveTabView",
    components: {
        TabA,
        TabB,
        TabC,
    },
    data() {
        return {
            activeTab: "TabA",
        };
    },
};
</script>

<style lang="scss" scoped></style>
