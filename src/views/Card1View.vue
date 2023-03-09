<template>
    <h1>Card Component</h1>
    <h2>
        Using tag slot in component receiver to catch all the content from
        component sender
    </h2>
    <div class="card">
        <Card1><h2>Title Content</h2></Card1>
        <Card1
            >Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur officia soluta non minima quo reiciendis, corrupti
            reprehenderit modi quas aspernatur.</Card1
        >
        <Card1>
            <img src="https://picsum.photos/200" alt="" />
        </Card1>
    </div>
</template>

<script>
import Card1 from "@/components/card/Card1.vue";
export default {
    name: "CardView",
    components: {
        Card1,
    },
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
