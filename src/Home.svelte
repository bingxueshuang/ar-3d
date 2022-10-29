<script>
    import Hero from "./components/Hero.svelte";
    import About from "./components/About.svelte";
    import Services from "./components/Services.svelte";
    import Models from "./components/Models.svelte";
    import Contact from "./components/Contact.svelte";
    import App from "./components/App.svelte";
</script>

<App>
    <main slot="main">
        <Hero />
        <About />
        <Services />
        <Models />
        <Contact />
    </main>
</App>