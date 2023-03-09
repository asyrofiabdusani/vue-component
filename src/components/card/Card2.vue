<template>
    <div class="card">
        <div>
            <slot name="header"></slot>
        </div>
        <div>
            <slot></slot>
        </div>
        <div>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card2Vue",
};
</script>

<style scoped>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 1em;
    margin-bottom: 20px;
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
