<template>
    <h1>Card 2</h1>
    <h2>
        We can specify target for slot with using v-slot in the sender, and name
        in receiver. v-slot is placed into root tag, and using v-root:default
        will make the content be placed into slot without name
    </h2>
    <div>
        <Card2>
            <template v-slot:header>
                <h2>Article Title</h2>
            </template>
            <template v-slot:default>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque odit quibusdam aliquid eveniet iste, dolorem
                architecto. Adipisci vitae distinctio repellat.
                <img src="https://picsum.photos/200" alt="" />
            </template>
            <template v-slot:footer>
                <button>detail</button>
            </template>
        </Card2>
    </div>
</template>

<script>
import Card2 from "@/components/card/Card2.vue";
export default {
    name: "Card2View",
    components: { Card2 },
};
</script>

<style lang="scss" scoped></style>
