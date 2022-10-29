<script>
    export let heading, subHeading;
</script>

<div class="card">
    <div class="image">
        <slot name="image" />
    </div>
    <div class="content">
        <h3>{heading}</h3>
        {#if subHeading}
            <h4>{subHeading}</h4>
        {/if}
        <div class="text">
            <slot name="content"></slot>
        </div>
    </div>
</div>

<style>
    .card {
        border-radius: 1rem;
        background-color: var(--secondary-bg);
        color: #000;
        padding: 1rem;
    }
    h3, h4 {
        text-align: center;
    }
    h4 {
        color: #333;
    }
    .image {
        border-radius: 9999px;
        width: min-content;
        border: 1px solid var(--border-color);
        margin: 0 auto;
    }
    h4 {
        border-bottom: 1px solid #aaa;
        padding-bottom: 1rem;
    }
</style>