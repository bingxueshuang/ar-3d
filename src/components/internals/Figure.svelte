<script>
    export let id, name, link, img;
</script>
<div class="figure" id="{id}">
    <a class="square" href="{link}">
        <img src={img} alt={name} />
        <p class="caption">{name}</p>
    </a>
</div>

<style>
    .figure {
        padding: 1rem;
        --scale: 96%;
    }
    .square {
        border: 1px solid currentColor;
        transition: transform 0.4s ease;
        transform: scale(var(--scale));
        padding: 1px;
    }
    a {
        display: block;
        color: inherit;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
        --scale: 1;
    }
    img {
        height: 10rem;
        vertical-align: middle;
    }
    .caption {
        text-align: center;
    }
</style>