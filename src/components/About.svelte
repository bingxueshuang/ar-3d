<script>
    import src from '../assets/gears.png';
    import TwoCol from "./internals/TwoCol.svelte";
</script>

<TwoCol id="about" heading="About" subHeading="Project Vision">
    <img {src} alt="pattern design" slot="left" />
    <div class="text" slot="right">
        Currently, developing applications in augmented reality is
        touch due to lack of resources for the developers.
        Our vision is to have an Augmented Reality API
        which allows easy development of AR applications.
        Through this API we should be able to access some
        important features for AR, like managing virtual objects,
        analyzing images or rendering virtual objects
        and real images on any display.
    </div>
</TwoCol>
<style>
    img, .text {
        width: 20rem;
    }
    @media (max-width: 720px) {
        .text {
            width: 100%;
        }
    }
</style>