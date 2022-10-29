<script>
    import cengg from '../assets/cengg.jpeg';
    import tfan from '../assets/turbofan.jpeg';
    import v8 from '../assets/v8.jpeg';
    import Figure from "./internals/Figure.svelte";
    const mlist = [
        {
            id: 'combustion-engine',
            name: 'Combustion Engine',
            img: cengg,
            link: '/combustion-engine'
        },
        {
            id: 'turbofan-engine',
            name: 'Turbofan Engine',
            img: tfan,
            link: '/turbofan-engine'
        },
        {
            id: 'v8-engine',
            name: 'V8 Engine',
            img: v8,
            link: '/v8-engine'
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