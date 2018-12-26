<template>
<b-navbar toggleable="md" variant="primary">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <router-link to="/" tag="b-navbar-brand">Stock Trader</router-link>
    <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
            <router-link to="/portfolio" tag="b-nav-item"></router-link>
            <router-link to="/stocks" tag="b-nav-item"></router-link>
        </b-navbar-nav>
    </b-collapse>
</b-navbar>
</template>

<script>
export default {
};
</script>
