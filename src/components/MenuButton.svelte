<script>
    export let props = {};
    export let open;
</script>
<a {...props} on:click={() => {open = !open }}>
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
        background-color: #fff;
        vertical-align: middle;
        display: inline-block;
        padding: 0.5rem;
        line-height: 1rem;
        text-align: right;
        cursor: pointer;
    }
    i {
        display: inline-block;
    }
</style>