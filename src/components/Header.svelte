<script>
    import Link from "./internals/Link.svelte";
    import MenuButton from "./internals/MenuButton.svelte";
    import src from "../assets/logo_100x100.png";
    let menuShown = false;
    const toggle = (event) => {
        const { target } = event;
        if (target.closest('a')) {
            menuShown = !menuShown;
        }
        if (target.closest('.menu-button')) {
            event.preventDefault();
        }
    }
</script>

<header>
    <h1 class="logo">
        <img {src} alt="ar-3d" />
    </h1>
    <ul role="navigation"
        class="link-list"
        id="main-nav"
        on:click={toggle}
        aria-expanded={`${menuShown}`}>
        <li><Link props={{ href: '#home' }}>Home</Link></li>
        <li><Link props={{ href: '#about' }}>About</Link></li>
        <li><Link props={{ href: '#services' }}>Services</Link></li>
        <li><Link props={{ href: '#models' }}>AR Models</Link></li>
        <li><Link props={{ href: '#contact' }}>Contact</Link></li>
        <li class="menu-button"><MenuButton props={{
            'aria-controls': 'main-nav',
            'role': 'button'
        }} bind:open={menuShown}></MenuButton></li>
    </ul>
</header>

<style>
    h1 {
        margin: 0;
        padding: 0;
    }
    .logo {
        height: 100%;
    }
    img {
        /* fix bottom space for image */
        vertical-align: middle;

        height: 100%;
        aspect-ratio: 1.2;
    }
    header {
        /* layout */
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        z-index: 5;

        height: var(--header-height, 4rem);
        padding: 0.5rem;
        background-color: var(--secondary-dark);

        color: var(--secondary);
    }
    .link-list {
        display: grid;
        grid-auto-flow: column;
        gap: 1rem;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .menu-button {
        display: none;
    }
    li {
        --bg: transparent;
        font-weight: bold;
    }
    li :global(a:hover) {
        box-shadow: currentColor 0 0 2px 1px;
    }

    @media screen and (max-width: 640px) {
        .link-list {
            grid-auto-flow: row;
            gap: 0;
            position: absolute;
            top: 1rem;
            right: 1rem;
        }
        li {
            /*padding: 0.5rem;*/
            border-bottom: 1px solid #eee;
            --bg: #fefefe;
            --bg-hover: #fafafa;
            color: #000;
            font-weight: normal;
            --width-full: 100%;
        }
        [aria-expanded="false"] li {
            display: none;
        }
        li.menu-button {
            text-align: right;
            display: block;
            grid-row: 1;
            padding: 0;
            color: var(--secondary);
            border: none;
            --width-full: auto;
        }
    }
</style>