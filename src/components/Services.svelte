<script>
    import TwoCol from "./internals/TwoCol.svelte";
    import Card from "./internals/Card.svelte";
    import box from '../assets/box.png';
    import museum from '../assets/museum.png';
</script>

<TwoCol id="services" heading="Services" subHeading="What the project offers">
    <div slot="left" class="card-container">
        <Card heading="3D models">
            <img slot="image" src={box} alt="box" />
            <div slot="content" class="text-content">
                3D modelling has changed the way we design; for
                the better. Not only does 3D modelling help the
                designers and end users visualise space requirements,
                but also improves drawing efficiency and accuracy.
                The AR-3D application provides a service to view
                and interact with 3D models in mixed reality.
                The sheer user interface via touch and gestures
                is highly intuitive and "just works".
            </div>
        </Card></div>
    <div slot="right" class="card-container">
        <Card heading="Applications">
            <img slot="image" src={museum} alt="museum" />
            <div slot="content" class="text-content">
                Applications of augmented reality have a great
                immersion potential for education, edutainment or
                cultural heritage presentations. The combination of
                intuitive and playful interaction with multi-faceted
                presentation options proved to be an effective
                mixture that attracts viewers to educational
                or cultural content. The usefulness of augmented reality
                for production domains like CAD or creating mechanical
                models goes beyond imagination.
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
    .card-container :global(.card) {
        height: 100%;
    }
    .text-content {
        max-width: 20rem;
    }
</style>