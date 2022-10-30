<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
</script>

<Header />
<slot name="main"></slot>
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
        font-size: 1.2rem;
    }
    :global(main) {
        margin-top: var(--header-height);
        display: flex;
        flex-direction: column;
        /*align-items: stretch; * default */
        gap: 5rem;
        padding-bottom: 2rem;
    }
    :global(main > div) {
        scroll-margin-top: var(--header-height);
    }
</style>