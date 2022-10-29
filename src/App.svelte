<script>
    import Header from "./components/Header.svelte";
    import Hero from "./components/Hero.svelte";
    import About from "./components/About.svelte";
    import Services from "./components/Services.svelte";
    import Models from "./components/Models.svelte";
    import Contact from "./components/Contact.svelte";
    import Footer from "./components/Footer.svelte";
</script>

<Header />
<main>
    <Hero />
    <About />
    <Services />
    <Models />
    <Contact />
</main>
<Footer />

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
    :global(html) {
        scroll-behavior: smooth;
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
        padding-bottom: 2rem;
    }
    main > :global(div) {
        scroll-margin-top: var(--header-height);
    }
</style>