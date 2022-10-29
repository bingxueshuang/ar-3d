<script>
    import Header from "./components/Header.svelte";
    import Hero from "./components/Hero.svelte";
    import About from "./components/About.svelte";
</script>

<Header />
<Hero />
<About />

<style>
    :global(:root) {
        --header-height: 4rem;
        --bg: #1f1627;
        --primary: #fff;
        --on-primary: #ccc;
        --secondary-bg: #fefefe;
        --secondary-dark: #140e1b;
        --secondary: #9c57e0;
        --on-secondary: #000;
    }
    :global(body) {
        background-color: var(--bg);
        color: var(--on-primary);
    }
</style>