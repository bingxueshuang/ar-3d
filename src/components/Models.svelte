<script>
    import chair from '../assets/chair.png';
    import cyl from '../assets/2CylinderEngine.png';
    import cengg from '../assets/cengg.jpeg';
    import cubes from '../assets/textureCube.png';
    import catengg from '../assets/catEngine.png';
    import turbofan from '../assets/turbofan.jpeg';
    import Figure from "./internals/Figure.svelte";
    const mlist = [
        {
            id: 'chair',
            name: 'Arm Chair',
            img: chair,
            link: './models/chair'
        },
        {
            id: 'cylinder-engine',
            name: '2 Cylinder Engine',
            img: cyl,
            link: './models/cylinder-engine'
        },
        {
            id: 'combustion',
            name: 'Internal Combustion Engine',
            img: cengg,
            link: './models/combustion-engine'
        },
        {
            id: 'cubes',
            name: 'Colourful cubes',
            img: cubes,
            link: './models/cubes'
        },
        {
            id: 'marine-engine',
            name: 'Marine Engine',
            img: catengg,
            link: './models/marine-engine'
        },
        {
            id: 'turbofan',
            name: 'Jet Engine',
            img: turbofan,
            link: './models/turbofan'
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