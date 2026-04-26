const navTemplate = `
<nav class="global-nav">
    <button class="menu-toggle" id="menu-btn">&#9776;</button>
    <a href="/index.html" class="nav-logo-container">
        <img src="/img/logo.png" alt="SOULSPECTRE LOGO">
    </a>
</nav>

<div class="sidebar-overlay" id="sidebar-overlay"></div>

<aside class="sidebar" id="sidebar">
    <button class="close-sidebar" id="close-btn">&times;</button>
    
    <a href="/index.html" class="direct-link">Main Hub</a>

    <button class="accordion-btn">Gameplay <span class="chevron">▼</span></button>
    <div class="accordion-content">
        <a href="/gameplay/basicshtml" class="sub-link">Core Rules</a>
        <a href="/gameplay/cities.html" class="sub-link">Cities Mechanics</a>
        <a href="/gameplay/mapresources.html" class="sub-link">Map And Resources</a>
        <a href="/gameplay/officers.html" class="sub-link">Officers and Parties</a>
        <a href="/gameplay/progression.html" class="sub-link">Characters Progression</a>
    </div>

    <button class="accordion-btn">Factions <span class="chevron">▼</span></button>
    <div class="accordion-content">
        <a href="/factions/valkyrion.html" class="sub-link" style="color: #5c9ce6;">Valkyrion Empire</a>
        <a href="/factions/forgotten.html" class="sub-link" style="color: #5cb88a;">The Forgotten</a>
        <a href="#" class="sub-link locked">Kharos Dominion</a>
        <a href="#" class="sub-link locked">Devil Syndicate</a>
        <a href="#" class="sub-link locked">Primal Coalition</a>
        <a href="#" class="sub-link locked">Iron Brotherhood</a>
        <a href="#" class="sub-link locked">Elven Enclave</a>
    </div>

    <button class="accordion-btn">Campaigns <span class="chevron">▼</span></button>
    <div class="accordion-content">
        <a href="/campaigns/story_mode.html" class="sub-link">Story Mode</a>
        <a href="/campaigns/arcade_mode.html" class="sub-link">Arcade Mode</a>
    </div>

    <a href="/about/credits.html" class="direct-link">The Architects</a>
</aside>
`;

class GlobalNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = navTemplate;
        this.initScripts();
    }

    initScripts() {
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-btn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');

        const toggleMenu = () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        };

        if(menuBtn) menuBtn.addEventListener('click', toggleMenu);
        if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
        if(overlay) overlay.addEventListener('click', toggleMenu);

        const acc = document.getElementsByClassName("accordion-btn");
        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                } 
            });
        }
    }
}

customElements.define('global-navigation', GlobalNav);
