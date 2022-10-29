<script>
    export let props = {};
</script>
<a {...props}>
    <slot>Top</slot>
</a>

<style>
    a {
        text-decoration: none;
        color: inherit;
        background-color: var(--bg);
        vertical-align: middle;
        width: 100%;
        display: inline-block;
        padding: 0.5rem;
        line-height: 1rem;
    }
    a:hover {
        background-color: var(--bg-hover);
    }
</style>