<template>
    <nav>
        <router-link to="/">Props</router-link> |
        <router-link to="/second-props">Second Props</router-link> |
        <router-link to="/provide-inject">Provide Inject</router-link> |
        <router-link to="/custom-event">Custom Event</router-link> |
        <router-link to="/input">Input</router-link> |
        <router-link to="/card1">Card 1</router-link> |
        <router-link to="/card2">Card 2</router-link> |
        <router-link to="/slot-props">Slot Props</router-link> |
        <router-link to="/style">Style</router-link> |
        <router-link to="/active">Active</router-link> |
        <router-link to="/portal">Portal</router-link> |
    </nav>
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
