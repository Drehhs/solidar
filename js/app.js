// Campaign data
const campaigns = [
    {
        id: 1,
        title: "Solar Power for Bugesera Village",
        description: "Providing sustainable energy infrastructure to 450 households, enabling night-time study and local commerce.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1NVpZ_oUem3x8EScBJOABI3YfDbqv5YttghqYik7p3OOg9B8rb0pDg-PB8_uIG5lKOTXFt3ZcepFiLRlT-JDp-6X3kT-5xChr58_0yc1_1mLljps7j4xhjLpJOo1O5zrheCJ6ARzOJVDr9UmoyOcdIzeb33yYKoqlZZ84--ZCgX72louUkqXMWL2d6l0csRiHDfpNmsFoI9nFV_0y2tI65ty8nNvoNfZT5socGaSaH5Wc2BOO7tJAvSVHtYm0tnCPM-LIO6nUMEo",
        category: "verified",
        progress: 78,
        raised: "RWF 12,400,000",
        daysLeft: 4
    },
    {
        id: 2,
        title: "Tea Cooperative Modernization",
        description: "Upgrading processing equipment for the Nyabihu Highlands collective to increase export quality.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBicIikfaty1h27hydnO_nYdSeKGPjh2xK-fSJ5hQI4FIodzwJFeH37qqO2wg47z2NvDlDtymn3i9VH_Pg1sE9cwsjB2S7GdM0r09BcJCCTyZ8vctZEhfvywiLu3QIWk870jA2oOaORyjwzgOfehVossHxzN_jdlOL59qdkm0VIJIwNAbVri-d3M4QoRHAZQXRXq-gg1LyHdEJZ2lcd5-vj9mmY7oyldv3SOVNcgWosVz4Av8dtdFCmK2j3FWY9rTz384AAx6mrEvM",
        category: "verified",
        progress: 42,
        raised: "RWF 4,200,000",
        daysLeft: 12
    }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadCampaigns();
    setupNavigation();
    setupFAB();
});

// Load campaign cards
function loadCampaigns() {
    const campaignGrid = document.getElementById('campaign-grid');
    
    // Campaign Card 1
    campaigns.forEach((campaign, index) => {
        const campaignCard = createCampaignCard(campaign);
        campaignGrid.appendChild(campaignCard);
    });

    // Add the special bento-style card
    const spotlightCard = createSpotlightCard();
    campaignGrid.appendChild(spotlightCard);
}

// Create individual campaign card
function createCampaignCard(campaign) {
    const article = document.createElement('article');
    article.className = 'group';
    article.innerHTML = `
        <div class="relative overflow-hidden rounded-xl bg-surface-container-low mb-4 aspect-[16/10]">
            <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                 data-alt="campaign image" 
                 src="${campaign.image}"/>
            <div class="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-surface/80 backdrop-blur-md rounded-full border border-white/5">
                <span class="material-symbols-outlined text-[14px] text-primary" data-icon="verified" data-weight="fill" style="font-variation-settings: 'FILL' 1;">verified</span>
                <span class="text-[10px] font-bold uppercase tracking-wider text-on-surface">Verified</span>
            </div>
        </div>
        <div class="px-1">
            <h3 class="text-xl font-bold headline-font mb-2 leading-tight">${campaign.title}</h3>
            <p class="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-2">${campaign.description}</p>
            <div class="space-y-2">
                <div class="flex justify-between items-end">
                    <span class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Funding Progress</span>
                    <span class="text-lg font-bold headline-font text-primary tabular-nums">${campaign.progress}%</span>
                </div>
                <div class="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-primary to-primary-container rounded-full" style="width: ${campaign.progress}%"></div>
                </div>
                <div class="flex justify-between pt-1">
                    <p class="text-xs text-on-surface-variant font-medium">${campaign.raised} raised</p>
                    <p class="text-xs text-on-surface-variant font-medium">${campaign.daysLeft} days left</p>
                </div>
            </div>
        </div>
    `;

    // Add click handler to navigate to campaign detail
    article.addEventListener('click', () => {
        navigateToCampaign(campaign.id);
    });

    return article;
}

// Create spotlight card (bento-style)
function createSpotlightCard() {
    const article = document.createElement('article');
    article.className = 'bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10';
    article.innerHTML = `
        <div class="flex justify-between items-start mb-6">
            <div>
                <div class="flex items-center gap-1.5 mb-2">
                    <span class="material-symbols-outlined text-[14px] text-primary" data-icon="verified" data-weight="fill" style="font-variation-settings: 'FILL' 1;">verified</span>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-primary">Solidar Spotlight</span>
                </div>
                <h3 class="text-2xl font-bold headline-font leading-tight">Clean Water Initiative</h3>
            </div>
            <div class="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span class="material-symbols-outlined text-primary" data-icon="water_drop">water_drop</span>
            </div>
        </div>
        <p class="text-on-surface-variant text-sm leading-relaxed mb-8">Direct funding for borehole maintenance and filtration kits in northern provinces. Impacting over 2,000 citizens.</p>
        <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="bg-surface-container p-4 rounded-xl">
                <p class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Contributors</p>
                <p class="text-lg font-bold headline-font">1,240</p>
            </div>
            <div class="bg-surface-container p-4 rounded-xl">
                <p class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Impact</p>
                <p class="text-lg font-bold headline-font">8 Villages</p>
            </div>
        </div>
        <div class="space-y-2">
            <div class="flex justify-between items-end">
                <span class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Funding Progress</span>
                <span class="text-lg font-bold headline-font text-primary tabular-nums">92%</span>
            </div>
            <div class="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-primary to-primary-container rounded-full" style="width: 92%"></div>
            </div>
        </div>
    `;

    // Add click handler
    article.addEventListener('click', () => {
        navigateToCampaign(3); // Special ID for spotlight
    });

    return article;
}

// Navigation setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('[data-page]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            
            // Update active state
            navLinks.forEach(l => {
                l.classList.remove('text-[#5ADF82]', 'bg-emerald-500/10', 'rounded-xl', 'px-4', 'py-1');
                l.classList.add('text-neutral-500');
            });
            
            link.classList.remove('text-neutral-500');
            link.classList.add('text-[#5ADF82]', 'bg-emerald-500/10', 'rounded-xl', 'px-4', 'py-1');
            
            // Handle page navigation (for demo, just log)
            console.log(`Navigating to ${page}`);
        });
    });
}

// FAB (Floating Action Button) setup
function setupFAB() {
    const fabButton = document.getElementById('fab-button');
    
    fabButton.addEventListener('click', () => {
        // Open contribution modal or navigate to create campaign
        window.location.href = 'contribute.html';
    });
}

// Navigate to campaign detail
function navigateToCampaign(campaignId) {
    // Store campaign ID in sessionStorage for the detail page
    sessionStorage.setItem('selectedCampaignId', campaignId);
    window.location.href = 'campaign.html';
}
