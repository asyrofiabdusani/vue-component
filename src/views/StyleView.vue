<template>
    <div>
        <h1 class="color">Styling Between Root and Child Component</h1>
        <h2>
            1. component style applied globally <br />2. parent style will be
            prioritize than child style with adding scoped, <br />3. the style
            will only applied only in that component even the parent style has
            scoped, the style will style affect to the child component. The
            solution is use css module. <br />4. when using slot, the parent
            style will still applied to the child component
        </h2>
        <ChildStyle />
        <ChildStyle
            ><h4 class="color">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, impedit!
            </h4></ChildStyle
        >
    </div>
</template>

<script>
import ChildStyle from "@/components/ChildStyle.vue";

export default {
    name: "StyleView",
    components: {
        ChildStyle,
    },
};
</script>

<style scoped>
.color {
    color: red;
}
</style>
