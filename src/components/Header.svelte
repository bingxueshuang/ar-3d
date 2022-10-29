<script>
    import Link from "./Link.svelte";
    import MenuButton from "./MenuButton.svelte";
    let menuShown = false;
</script>

<header>
    <div class="logo">
        <img src="/public/logo_200x200.png" alt="ar-3d" />
    </div>
    <ul role="navigation" class="link-list" id="main-nav" aria-expanded={`${menuShown}`}>
        <li><Link props={{ href: '#' }}>Home</Link></li>
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
    .logo {
        height: 100%;
    }
    img {
        /* fix bottom space for image */
        vertical-align: middle;

        height: 100%;
        aspect-ratio: 1.5;
    }
    header {
        /* layout */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        /*height: var(--header-height, 4rem);*/
        height: 4rem;
        padding: 0.5rem;
        background-color: #eeecf5;
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
        --bg-hover: #fff7;
    }

    @media screen and (max-width: 640px) {
        .link-list {
            grid-auto-flow: row;
            gap: 0;
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
        }
        li {
            padding: 0.5rem;
            border-bottom: 1px solid #eee;
            --bg: #fefefe;
            --bg-hover: #fafafa;
        }
        [aria-expanded="false"] li {
            display: none;
        }
        li.menu-button {
            text-align: right;
            display: block;
            grid-row: 1;
            padding: 0;
        }
    }
</style>