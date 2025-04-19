function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the faster

    counters.forEach(counter => {
        const animate = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animate, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(counter);
    });
}

document.addEventListener('DOMContentLoaded', animateCounters);

const mods = [
    {
        id: 1,
        title: "Enhanced Graphics Overhaul",
        description: "Complete graphics overhaul with ray tracing support and HD textures",
        author: "GraphicsMaster",
        category: "graphics",
        downloads: 45678,
        rating: 4.8,
        image: "https://picsum.photos/400/300?random=1",
        dateAdded: "2025-03-15"
    },
    {
        id: 2,
        title: "Advanced Combat System",
        description: "Completely revamps the combat mechanics with new moves and abilities",
        author: "CombatPro",
        category: "gameplay",
        downloads: 32150,
        rating: 4.6,
        image: "https://picsum.photos/400/300?random=2",
        dateAdded: "2025-04-01"
    },
    {
        id: 3,
        title: "Medieval Armor Pack",
        description: "Adds 50+ historically accurate medieval armor sets",
        author: "HistoryBuff",
        category: "skins",
        downloads: 28930,
        rating: 4.9,
        image: "https://picsum.photos/400/300?random=3",
        dateAdded: "2025-04-10"
    }
    // Add more mods as needed
];

function createModCard(mod) {
    return `
        <div class="mod-card" data-category="${mod.category}">
            <img src="${mod.image}" alt="${mod.title}" class="mod-image">
            <div class="mod-content">
                <h3 class="mod-title">${mod.title}</h3>
                <p class="mod-description">${mod.description}</p>
                <div class="mod-meta">
                    <span class="author"><i class="fas fa-user"></i> ${mod.author}</span>
                    <span class="downloads"><i class="fas fa-download"></i> ${mod.downloads.toLocaleString()}</span>
                    <span class="rating"><i class="fas fa-star"></i> ${mod.rating}</span>
                </div>
                <div class="mod-actions">
                    <button class="download-btn"><i class="fas fa-download"></i> Download</button>
                    <button class="details-btn"><i class="fas fa-info-circle"></i> Details</button>
                </div>
            </div>
        </div>
    `;
}

function initModList() {
    const modList = document.getElementById('mod-list');
    if (!modList) return;

    // Initialize with all mods
    modList.innerHTML = mods.map(mod => createModCard(mod)).join('');

    // Search functionality
    const searchInput = document.getElementById('mod-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredMods = mods.filter(mod => 
                mod.title.toLowerCase().includes(searchTerm) ||
                mod.description.toLowerCase().includes(searchTerm)
            );
            modList.innerHTML = filteredMods.map(mod => createModCard(mod)).join('');
        });
    }

    // Category filter
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            const category = e.target.value;
            const filteredMods = category ? 
                mods.filter(mod => mod.category === category) : 
                mods;
            modList.innerHTML = filteredMods.map(mod => createModCard(mod)).join('');
        });
    }
}

// Forum functionality
function initForum() {
    const threadList = document.getElementById('thread-list');
    const modal = document.getElementById('thread-modal');
    const newThreadBtn = document.getElementById('new-thread-btn');
    const closeModal = document.querySelector('.close-modal');
    const threadForm = document.getElementById('thread-form');

    // Sample thread data
    const threads = [
        {
            id: 1,
            title: "New Graphics Mod Release - Ultra HD Textures",
            author: "TextureMaster",
            category: "mod-releases",
            content: "Just released a new graphics mod that enhances all textures...",
            replies: 23,
            views: 156,
            date: "2025-04-18"
        },
        // Add more sample threads
    ];

    function createThreadCard(thread) {
        return `
            <div class="thread-card">
                <div class="thread-header">
                    <h3>${thread.title}</h3>
                    <span class="thread-category">${thread.category}</span>
                </div>
                <div class="thread-meta">
                    <span><i class="fas fa-user"></i> ${thread.author}</span>
                    <span><i class="fas fa-comments"></i> ${thread.replies} replies</span>
                    <span><i class="fas fa-eye"></i> ${thread.views} views</span>
                    <span><i class="fas fa-clock"></i> ${formatDate(thread.date)}</span>
                </div>
                <p class="thread-preview">${thread.content.substring(0, 150)}...</p>
            </div>
        `;
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    // Modal handlers
    if (newThreadBtn) {
        newThreadBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Form submission
    if (threadForm) {
        threadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form submission logic here
            modal.style.display = 'none';
        });
    }

    // Initialize thread list
    if (threadList) {
        threadList.innerHTML = threads.map(thread => createThreadCard(thread)).join('');
    }
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initModList();
    animateCounters();
    initForum();
});