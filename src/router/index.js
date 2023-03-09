import { createRouter, createWebHistory } from "vue-router";
import PropsView from "../views/PropsView.vue";
import SecondPropsView from "../views/SecondPropsView.vue";
import ProvideInjectView from "../views/ProvideInjectView.vue";
import CustomEventView from "../views/CustomEventView.vue";
import InputView from "../views/InputView.vue";
import Card1View from "../views/Card1View.vue";
import Card2View from "../views/Card2View.vue";
import SlotProps from "../views/SlotPropsView.vue";
import StyleView from "../views/StyleView.vue";
import ActiveView from "../views/ActiveTabView.vue";
import PortalView from "../views/PortalView.vue";

const routes = [
    {
        path: "/",
        name: "props",
        component: PropsView,
    },
    {
        path: "/second-props",
        name: "secondProps",
        component: SecondPropsView,
    },
    {
        path: "/provide-inject",
        name: "provideInject",
        component: ProvideInjectView,
    },
    {
        path: "/custom-event",
        name: "customeEvent",
        component: CustomEventView,
    },
    {
        path: "/input",
        name: "input",
        component: InputView,
    },
    {
        path: "/card1",
        name: "card1",
        component: Card1View,
    },
    {
        path: "/card2",
        name: "card2",
        component: Card2View,
    },
    {
        path: "/slot-props",
        name: "slotProps",
        component: SlotProps,
    },
    {
        path: "/style",
        name: "style",
        component: StyleView,
    },
    {
        path: "/active",
        name: "active",
        component: ActiveView,
    },
    {
        path: "/portal",
        name: "portal",
        component: PortalView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
