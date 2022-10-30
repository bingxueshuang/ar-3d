<script>
    export let props = {};
    export let href = '#';
</script>
<a {href} {...props}>
    <slot>Top</slot>
</a>

<style>
    a {
        text-decoration: none;
        color: inherit;
        background-color: var(--bg);
        vertical-align: middle;
        width: var(--width-full, auto);
        display: inline-block;
        padding: 0.5rem;
        line-height: 1rem;
    }
</style>