<script>
    import TwoCol from "./TwoCol.svelte";
    import Card from "./Card.svelte";
    import box from '../assets/box.png';
    import museum from '../assets/museum.png';
</script>

<TwoCol id="services" heading="Services" subHeading="What the project offers">
    <div slot="left" class="card-container">
        <Card heading="One">
            <img slot="image" src={box} alt="box" />
            <div slot="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                Duis sagittis ipsum. Praesent mauris.
            </div>
        </Card></div>
    <div slot="right" class="card-container">
        <Card heading="Two">
            <img slot="image" src={museum} alt="museum" />
            <div slot="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam.
                Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                Duis sagittis ipsum. Praesent mauris.
            </div>
        </Card>
    </div>
</TwoCol>
<style>
    img {
        width: 5rem;
    }
    .card-container {
        padding-top: 2rem;
    }
    .card-container :global(.image) {
        margin: auto;
        border: 1px solid #aaa;
        background-color: #ccc;
        padding: 0.5rem;
        position: relative;
        top: -3rem;
    }
    .card-container :global(.content) {
        position: relative;
        top: -3rem;
        margin-bottom: -3rem;
    }
</style>