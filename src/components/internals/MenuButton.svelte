<script>
    export let props = {};
    export let open;
    export let href='#';
</script>
<a {href} {...props}>
    {#if open}
        <i class="material-symbols-outlined">close</i>
    {:else}
        <i class="material-symbols-outlined">menu</i>
    {/if}
</a>

<style>
    a {
        text-decoration: none;
        color: inherit;
        background-color: transparent;
        vertical-align: middle;
        display: inline-block;
        padding: 0.5rem;
        line-height: 1rem;
        text-align: right;
        cursor: pointer;
        font-weight: bold;
    }
    i {
        display: inline-block;
    }
</style>