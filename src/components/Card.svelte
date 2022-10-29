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