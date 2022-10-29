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
    }
    .square {
        border: 1px solid currentColor;
    }
    a {
        display: block;
        color: inherit;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    img {
        height: 10rem;
        vertical-align: middle;
    }
    .caption {
        text-align: center;
    }
</style>