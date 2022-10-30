<script>
    import TwoCol from "./internals/TwoCol.svelte";
    import Card from "./internals/Card.svelte";
</script>

<TwoCol id="contact" heading="Contact" subHeading="Contributors">
    <div slot="left" class="card-container">
        <Card heading="Jalondhara Jatin" subHeading="Student">
            <span slot="image" class="material-symbols-outlined image-icon">
                person
            </span>
            <div slot="content">
                <p>National Institute of Technology, Karnataka</p>
            </div>
        </Card>
    </div>
    <div slot="right" class="card-container">
        <Card heading="Manojna K P" subHeading="Student">
            <span slot="image" class="material-symbols-outlined image-icon">
                person
            </span>
            <div slot="content">
                <p>National Institute of Technology, Karnataka</p>
            </div>
        </Card>
    </div>
</TwoCol>

<style>
    .image-icon {
        font-size: 8rem;
    }
    .card-container :global(.image) {
        scale: 0.8;
        padding: 1.5rem;
        border: 1px solid #ccc;
    }
    p {
        text-align: center;
    }
</style>