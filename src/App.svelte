<script>
    import Header from "./components/Header.svelte";
    import Hero from "./components/Hero.svelte";
</script>

<Header />
<Hero />

<style>
    :global(:root) {
        --header-height: 4rem;
    }
</style>