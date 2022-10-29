<script>
    import Header from "./components/Header.svelte";
    import Hero from "./components/Hero.svelte";
    import About from "./components/About.svelte";
    import Services from "./components/Services.svelte";
    import Models from "./components/Models.svelte";
</script>

<Header />
<main>
    <Hero />
    <About />
    <Services />
    <Models />
</main>

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
    main {
        margin-top: var(--header-height);
        display: flex;
        flex-direction: column;
        /*align-items: stretch; * default */
        gap: 5rem;
    }
</style>