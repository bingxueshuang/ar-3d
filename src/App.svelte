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
    }
</style>