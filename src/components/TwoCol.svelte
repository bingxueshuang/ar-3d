<script>
    export let id, heading, subHeading;
</script>
<div {id} class="container">
    <div class="parent">
        <h2>{heading}</h2>
        <h3 class="subHeading">{subHeading}</h3>
        <div class="two-column">
            <slot name="left"></slot>
            <slot name="right"></slot>
        </div>
    </div>
</div>

<style>
    .parent {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 80vw;
        margin: 0 auto;
    }
    h2 {
        color: var(--primary);
    }
    h2, h3 {
        text-align: center;
    }
    .two-column {
        display: flex;
        gap: 2rem;
    }
    @media (max-width: 720px) {
        .two-column {
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 1rem;
        }
    }
</style>