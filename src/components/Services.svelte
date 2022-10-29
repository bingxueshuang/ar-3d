<script>
    import TwoCol from "./TwoCol.svelte";
</script>

<TwoCol id="services" heading="Services" subHeading="What the project offers">
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