// app.js - Main Application Logic

// State Management
let currentTab = 'servers';
let currentFilter = { servers: 'all', skins: 'all', resourcepacks: 'all', mods: 'all' };
let currentData = { servers, skins, resourcepacks: resourcePacks, mods };
let filteredData = { ...currentData };

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    renderServers();
    renderSkins();
    renderPacks();
    renderMods();
    setupSearchListeners();
});

// Particles
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        container.appendChild(particle);
    }
}

// Tab Switching
function switchTab(tabName) {
    currentTab = tabName;
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Modal Functions
function openModal(type, item) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    let content = '';
    
    if (type === 'server') {
        content = generateServerModal(item);
    } else if (type === 'skin' || type === 'pack' || type === 'mod') {
        content = generateDownloadModal(item, type);
    }
    
    modalBody.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Generate Server Modal
function generateServerModal(server) {
    const stars = generateStars(server.rating);
    return `
        <div class="modal-header">
            <div class="modal-icon">${server.icon}</div>
            <div>
                <h2 class="modal-title">${server.name}</h2>
                <div class="rating">
                    ${stars}
                    <span class="rating-text">${server.rating} (${server.reviews} reviews)</span>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3>📸 Screenshots</h3>
            <div class="modal-gallery">
                ${server.screenshots.map(img => `
                    <div class="gallery-img">${img}</div>
                `).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>ℹ️ Server Details</h3>
            <div class="modal-details">
                <div class="detail-item">
                    <div class="detail-label">Server IP</div>
                    <div class="detail-value">${server.ip}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Port</div>
                    <div class="detail-value">${server.port}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Players Online</div>
                    <div class="detail-value">${server.players}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Type</div>
                    <div class="detail-value">${server.type}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Region</div>
                    <div class="detail-value">${server.region}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Version</div>
                    <div class="detail-value">${server.version}</div>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3>✨ Features</h3>
            <div class="item-meta">
                ${server.features.map(feature => `
                    <span class="meta-tag">${feature}</span>
                `).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>📝 How to Connect</h3>
            <div class="install-steps">
                ${server.installation.map((step, index) => `
                    <div class="install-step">
                        <div class="step-number">${index + 1}</div>
                        <div class="step-text">${step}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="download-section">
            <button class="download-btn" onclick="copyServerIP('${server.ip}', '${server.port}')">
                📋 Copy Server IP & Port
            </button>
            <button class="download-btn" onclick="window.open('${server.downloadLink}', '_blank')" style="background: rgba(0, 245, 255, 0.2); color: #00f5ff; border: 2px solid #00f5ff;">
                🌐 Visit Official Website
            </button>
            <div class="download-info">
                Click to copy IP: ${server.ip}:${server.port}
            </div>
        </div>
    `;
}

// Generate Download Modal
function generateDownloadModal(item, type) {
    const stars = generateStars(item.rating);
    const typeName = type.charAt(0).toUpperCase() + type.slice(1);
    
    return `
        <div class="modal-header">
            <div class="modal-icon">${item.icon}</div>
            <div>
                <h2 class="modal-title">${item.name}</h2>
                <div class="rating">
                    ${stars}
                    <span class="rating-text">${item.rating} (${item.reviews} reviews)</span>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <p style="color: rgba(255,255,255,0.9); line-height: 1.6; font-size: 1.05rem;">
                ${item.description}
            </p>
        </div>

        <div class="modal-section">
            <h3>📸 Preview</h3>
            <div class="modal-gallery">
                ${item.screenshots.map(img => `
                    <div class="gallery-img">${img}</div>
                `).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>ℹ️ ${typeName} Details</h3>
            <div class="modal-details">
                ${item.type ? `
                    <div class="detail-item">
                        <div class="detail-label">Type</div>
                        <div class="detail-value">${item.type}</div>
                    </div>
                ` : ''}
                ${item.resolution ? `
                    <div class="detail-item">
                        <div class="detail-label">Resolution</div>
                        <div class="detail-value">${item.resolution}</div>
                    </div>
                ` : ''}
                ${item.version ? `
                    <div class="detail-item">
                        <div class="detail-label">Version</div>
                        <div class="detail-value">${item.version}</div>
                    </div>
                ` : ''}
                ${item.size ? `
                    <div class="detail-item">
                        <div class="detail-label">File Size</div>
                        <div class="detail-value">${item.size}</div>
                    </div>
                ` : ''}
                ${item.fileSize ? `
                    <div class="detail-item">
                        <div class="detail-label">File Size</div>
                        <div class="detail-value">${item.fileSize}</div>
                    </div>
                ` : ''}
                <div class="detail-item">
                    <div class="detail-label">Downloads</div>
                    <div class="detail-value">${item.downloads}</div>
                </div>
            </div>
        </div>

        <div class="modal-section">
            <h3>✨ Features</h3>
            <div class="item-meta">
                ${item.features.map(feature => `
                    <span class="meta-tag">${feature}</span>
                `).join('')}
            </div>
        </div>

        <div class="modal-section">
            <h3>📝 Installation Guide</h3>
            <div class="install-steps">
                ${item.installation.map((step, index) => `
                    <div class="install-step">
                        <div class="step-number">${index + 1}</div>
                        <div class="step-text">${step}</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="download-section">
            <button class="download-btn" onclick="handleDownload('${item.name}', '${item.downloadLink}')">
                ⬇️ Download ${typeName} Now
            </button>
            <div class="download-info">
                File Size: ${item.size || item.fileSize} • ${item.downloads} downloads
            </div>
        </div>
    `;
}

// Generate Stars
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<span class="star">★</span>';
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            stars += '<span class="star">★</span>';
        } else {
            stars += '<span class="star empty">★</span>';
        }
    }
    return stars;
}

// Copy Server IP
function copyServerIP(ip, port) {
    const text = `${ip}:${port}`;
    navigator.clipboard.writeText(text).then(() => {
        showNotification(`✓ Copied: ${text}`);
    });
}

// Handle Download
function handleDownload(name, link) {
    showNotification(`⬇️ Starting download: ${name}`);
    setTimeout(() => {
        window.open(link, '_blank');
    }, 500);
}

// Render Functions
function renderServers(data = servers) {
    const grid = document.getElementById('serversGrid');
    grid.innerHTML = '';

    data.forEach(server => {
        const card = document.createElement('div');
        card.className = 'item-card';
        const stars = generateStars(server.rating);
        
        card.innerHTML = `
            <div class="server-header">
                <div class="server-icon">${server.icon}</div>
                <div>
                    <div class="item-title">${server.name}</div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span class="status-dot"></span>
                        <span style="color: #00ff88; font-size: 0.9rem;">Online</span>
                    </div>
                </div>
            </div>
            <div class="rating">
                ${stars}
                <span class="rating-text">${server.rating}</span>
            </div>
            <div class="item-description">${server.description}</div>
            <div class="item-meta">
                ${server.tags.map(tag => `<span class="meta-tag">${tag}</span>`).join('')}
            </div>
            <div class="card-actions">
                <button class="action-btn" onclick="openModal('server', ${JSON.stringify(server).replace(/"/g, '&quot;')})">
                    📖 Details
                </button>
                <button class="action-btn secondary" onclick="copyServerIP('${server.ip}', '${server.port}')">
                    📋 Copy IP
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderSkins(data = skins) {
    const grid = document.getElementById('skinsGrid');
    grid.innerHTML = '';

    data.forEach(skin => {
        const card = document.createElement('div');
        card.className = 'item-card';
        const stars = generateStars(skin.rating);
        
        card.innerHTML = `
            <div class="item-preview">${skin.icon}</div>
            <div class="item-title">${skin.name}</div>
            <div class="rating">
                ${stars}
                <span class="rating-text">${skin.rating}</span>
            </div>
            <div class="item-description">${skin.description}</div>
            <div class="item-meta">
                ${skin.tags.map(tag => `<span class="meta-tag">${tag}</span>`).join('')}
            </div>
            <div class="card-actions">
                <button class="action-btn" onclick="openModal('skin', ${JSON.stringify(skin).replace(/"/g, '&quot;')})">
                    ⬇️ Download
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderPacks(data = resourcePacks) {
    const grid = document.getElementById('packsGrid');
    grid.innerHTML = '';

    data.forEach(pack => {
        const card = document.createElement('div');
        card.className = 'item-card';
        const stars = generateStars(pack.rating);
        
        card.innerHTML = `
            <div class="item-preview">${pack.icon}</div>
            <div class="item-title">${pack.name}</div>
            <div class="rating">
                ${stars}
                <span class="rating-text">${pack.rating}</span>
            </div>
            <div class="item-description">${pack.description}</div>
            <div class="item-meta">
                ${pack.tags.map(tag => `<span class="meta-tag">${tag}</span>`).join('')}
            </div>
            <div class="card-actions">
                <button class="action-btn" onclick="openModal('pack', ${JSON.stringify(pack).replace(/"/g, '&quot;')})">
                    ⬇️ Download
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderMods(data = mods) {
    const grid = document.getElementById('modsGrid');
    grid.innerHTML = '';

    data.forEach(mod => {
        const card = document.createElement('div');
        card.className = 'item-card';
        const stars = generateStars(mod.rating);
        
        card.innerHTML = `
            <div class="item-preview">${mod.icon}</div>
            <div class="item-title">${mod.name}</div>
            <div class="rating">
                ${stars}
                <span class="rating-text">${mod.rating}</span>
            </div>
            <div class="item-description">${mod.description}</div>
            <div class="item-meta">
                ${mod.tags.map(tag => `<span class="meta-tag">${tag}</span>`).join('')}
            </div>
            <div class="card-actions">
                <button class="action-btn" onclick="openModal('mod', ${JSON.stringify(mod).replace(/"/g, '&quot;')})">
                    ⬇️ Download
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter Functions
function filterServers(type) {
    currentFilter.servers = type;
    updateFilterButtons('servers', type);
    
    let filtered = servers;
    if (type !== 'all') {
        filtered = servers.filter(s => s.type === type);
    }
    renderServers(filtered);
}

function filterSkins(tag) {
    currentFilter.skins = tag;
    updateFilterButtons('skins', tag);
    
    let filtered = skins;
    if (tag !== 'all') {
        filtered = skins.filter(s => s.tags.includes(tag));
    }
    renderSkins(filtered);
}

function filterPacks(tag) {
    currentFilter.resourcepacks = tag;
    updateFilterButtons('packs', tag);
    
    let filtered = resourcePacks;
    if (tag !== 'all') {
        filtered = resourcePacks.filter(p => p.tags.includes(tag));
    }
    renderPacks(filtered);
}

function filterMods(tag) {
    currentFilter.mods = tag;
    updateFilterButtons('mods', tag);
    
    let filtered = mods;
    if (tag !== 'all') {
        filtered = mods.filter(m => m.tags.includes(tag));
    }
    renderMods(filtered);
}

function updateFilterButtons(section, activeFilter) {
    const parent = document.getElementById(section).closest('.tab-content');
    const buttons = parent.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(activeFilter.toLowerCase()) || 
            (activeFilter === 'all' && btn.textContent === 'All')) {
            btn.classList.add('active');
        }
    });
}

// Sort Functions
function sortContent(type) {
    const selectId = `sort${type.charAt(0).toUpperCase() + type.slice(1)}`;
    const sortBy = document.getElementById(selectId).value;
    
    let data = type === 'servers' ? [...servers] : 
                type === 'skins' ? [...skins] :
                type === 'packs' ? [...resourcePacks] : [...mods];
    
    if (sortBy === 'popular' || sortBy === 'rating') {
        data.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'downloads') {
        data.sort((a, b) => {
            const aNum = parseInt(a.downloads.replace(/[^0-9]/g, ''));
            const bNum = parseInt(b.downloads.replace(/[^0-9]/g, ''));
            return bNum - aNum;
        });
    } else if (sortBy === 'name') {
        data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'players') {
        data.sort((a, b) => {
            const aNum = parseInt(a.players.replace(/[^0-9]/g, ''));
            const bNum = parseInt(b.players.replace(/[^0-9]/g, ''));
            return bNum - aNum;
        });
    } else if (sortBy === 'size') {
        data.sort((a, b) => {
            const aSize = parseFloat(a.size || a.fileSize);
            const bSize = parseFloat(b.size || b.fileSize);
            return aSize - bSize;
        });
    }
    
    if (type === 'servers') renderServers(data);
    else if (type === 'skins') renderSkins(data);
    else if (type === 'packs') renderPacks(data);
    else if (type === 'mods') renderMods(data);
}

// Search Functions
function setupSearchListeners() {
    document.getElementById('searchServers').addEventListener('input', (e) => {
        searchContent('servers', e.target.value);
    });
    
    document.getElementById('searchSkins').addEventListener('input', (e) => {
        searchContent('skins', e.target.value);
    });
    
    document.getElementById('searchPacks').addEventListener('input', (e) => {
        searchContent('resourcepacks', e.target.value);
    });
    
    document.getElementById('searchMods').addEventListener('input', (e) => {
        searchContent('mods', e.target.value);
    });
}

function searchContent(type, query) {
    query = query.toLowerCase();
    
    let data = type === 'servers' ? servers :
                type === 'skins' ? skins :
                type === 'resourcepacks' ? resourcePacks : mods;
    
    const filtered = data.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
    );
    
    if (type === 'servers') renderServers(filtered);
    else if (type === 'skins') renderSkins(filtered);
    else if (type === 'resourcepacks') renderPacks(filtered);
    else if (type === 'mods') renderMods(filtered);
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
