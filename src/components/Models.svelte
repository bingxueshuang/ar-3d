<script>
    import cengg from '../assets/cengg.jpeg';
    import tfan from '../assets/turbofan.jpeg';
    import v8 from '../assets/v8.jpeg';
    import Figure from "./internals/Figure.svelte";
    const mlist = [
        {
            id: 'chair',
            name: 'Chair',
            img: cengg,
            link: '/models/chair'
        },
        {
            id: 'cubes',
            name: 'Cubes',
            img: tfan,
            link: '/models/cubes'
        },
        {
            id: 'engine',
            name: 'Engine',
            img: v8,
            link: '/models/engine'
        },
    ]
</script>

<div class="models-container" id="models">
    <div class="models">
        <h2>AR models</h2>
        <h3>useful parts</h3>
    </div>
    <div class="grid">
        {#each mlist as model (model.id)}
            <Figure {...model} />
        {/each}
    </div>
</div>

<style>
    h2, h3 {
        text-align: center;
    }
    .grid {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
    }
</style>