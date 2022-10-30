<script>
    import src from '../assets/engine.png';
</script>
<div class="hero-container center" id="home">
<div class="hero">
    <div class="text">
        <h2>AR-3D</h2>
        <div class="desc">
            View 3D models in your own space using Augmented Reality.
            Change the angle of vision, scale of the model or the position
            of the model everything at your fingertips. Try AR-3D.
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
        --padding: 2rem;
        display: flex;
        flex-direction: row;
        max-width: calc(80vw - var(--padding));
        padding: var(--padding);
        border-radius: 1rem;
        height: min-content;
        align-items: center;
        box-shadow: var(--secondary) 0 0 1px 2px;
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