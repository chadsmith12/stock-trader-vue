<template>
<b-navbar toggleable="md" variant="light" type="light">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand to="/">Stock Trader</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
            <b-nav-item to="/portfolio">Portfolio</b-nav-item>
            <b-nav-item to="/stocks">Stocks</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" right>End Day</b-nav-item>
            <b-nav-item-dropdown text="Save & Load" right>
                <b-dropdown-item href="#">Save Data</b-dropdown-item>
                <b-dropdown-item href="#">Load Data</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-collapse>
</b-navbar>
</template>

<script>
export default {
};
</script>
