<script>
    import src from '../assets/gears.png';
</script>

<div id="about" class="about-container">
    <div class="about">
        <h2>About</h2>
        <h3>Project Vision</h3>
        <div class="two-column">
            <img {src} alt="pattern design" />
            <div class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                Duis sagittis ipsum. Praesent mauris.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                Duis sagittis ipsum. Praesent mauris.
            </div>
        </div>
    </div>
</div>

<style>
    .about {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 80vw;
        margin: 0 auto;
    }
    h2 {
        color: var(--primary);
    }
    h2, h3 {
        text-align: center;
    }
    .two-column {
        display: flex;
        gap: 2rem;
    }
    img, .text {
        width: 15rem;
    }
    @media (max-width: 720px) {
        .two-column {
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 1rem;
        }
        .text {
            width: 100%;
        }
    }
</style>