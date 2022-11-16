<script>
    import Link from "./internals/Link.svelte";
</script>

<footer>
    <div class="links">
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
    </div>
    <div class="copyrights">
<!--        <p>&copy; All rights reserved</p>-->
        <p>Developed by Jalondhara Jatin and Manojna K P, National Institute of Technology</p>
    </div>
</footer>

<style>
    .links {
        border-bottom: 1px solid currentColor;
        display: flex;
        justify-content: center;
        gap: 2rem;
        font-size: 1.2em;
    }
    .links :global(a) {
        width: max-content;
    }
    .links :global(a:hover) {
        text-decoration: underline;
    }
    footer {
        --bg: var(--secondary-dark);
        background-color: var(--bg);
        padding: 1.5rem 2rem 0.5rem;
        margin-top: var(--header-height);
    }
    .copyrights {
        text-align: center;
    }
</style>