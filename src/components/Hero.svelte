<script>
    import src from '../assets/engine.png';
    console.log(src);
</script>
<div class="hero-container center" id="home">
<div class="hero">
    <div class="text">
        <h2>Cachy line</h2>
        <div class="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam.
            Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            Duis sagittis ipsum. Praesent mauris.
        </div>
        <a href="#models" role="button">Get started</a>
    </div>
    <img {src} alt="engine" />
</div>
</div>

<style>
    .hero-container {
        display: grid;
        place-content: center;
        height: calc(80vh - var(--header-height, 4rem));
    }
    .hero {
        display: flex;
        flex-direction: row;
        max-width: 80vw;
        height: min-content;
        align-items: center;
    }
    img {
        height: 15rem;
    }
    .text {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 1rem;
        max-width: 30rem;
    }
    @media screen and (max-width: 720px) {
        .hero {
            flex-direction: column-reverse;
        }
        img {
            height: auto;
            width: 50vw;
        }
        .hero-container {
            height: auto;
            padding: 2rem 0;
        }
    }
    a {
        text-decoration: none;
        color: inherit;
        display: inline-block;
        padding: 1rem;
        border: 1px solid #000;
    }
    /* theming */
    h2, a {
        color: var(--primary);
    }
    a {
        --bg: #5b21b6;
        background-color: var(--bg);
        font-weight: bold;
        border: 1px solid currentColor;
        border-radius: 0.5em;
    }
    a:hover {
        box-shadow: var(--on-primary) 0 0 1px 1px;
    }
</style>