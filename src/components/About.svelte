<script>
    import src from '../assets/gears.png';
    import TwoCol from "./TwoCol.svelte";
</script>

<TwoCol id="about" heading="About" subHeading="Project Vision">
    <img {src} alt="pattern design" slot="left" />
    <div class="text" slot="right">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus diam.
        Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        Duis sagittis ipsum. Praesent mauris.
        Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        Duis sagittis ipsum. Praesent mauris.
    </div>
</TwoCol>
<style>
    img, .text {
        width: 15rem;
    }
    @media (max-width: 720px) {
        .text {
            width: 100%;
        }
    }
</style>