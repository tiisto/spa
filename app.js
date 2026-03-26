// Simple SPA router
const routes = {
    home: {
        title: 'Home',
        content: `
            <div class="page">
                <h2>🏠 Home</h2>
                <div style="text-align: center; margin: 2rem 0;">
                    <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&q=80" 
                         alt="Adorable Shiba Inu dog" 
                         style="max-width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
                    <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">🐕 Such wow! Much Shiba!</p>
                </div>
                <p>Welcome to this simple Single Page Application built with vanilla JavaScript!</p>
                <p>This SPA demonstrates:</p>
                <ul>
                    <li>✨ Client-side routing</li>
                    <li>🎨 Smooth page transitions</li>
                    <li>📱 Responsive design</li>
                    <li>🚀 GitHub Pages hosting</li>
                    <li>🐶 Cute dog pictures!</li>
                </ul>
                <p>Click the navigation links above to explore different pages without reloading!</p>
            </div>
        `
    },
    about: {
        title: 'About',
        content: `
            <div class="page">
                <h2>ℹ️ About</h2>
                <p>This is a lightweight Single Page Application created as a demonstration project.</p>
                <p><strong>Built with:</strong></p>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3 (with gradients and animations)</li>
                    <li>Vanilla JavaScript (no frameworks!)</li>
                </ul>
                <p><strong>Features:</strong></p>
                <ul>
                    <li>Hash-based routing</li>
                    <li>Dynamic content loading</li>
                    <li>Modern, clean design</li>
                    <li>Mobile-responsive layout</li>
                </ul>
            </div>
        `
    },
    contact: {
        title: 'Contact',
        content: `
            <div class="page">
                <h2>📧 Contact</h2>
                <p>Want to get in touch? Here are the ways to reach out:</p>
                <ul>
                    <li><strong>GitHub:</strong> <a href="https://github.com/tiisto" target="_blank">@tiisto</a></li>
                    <li><strong>Project:</strong> <a href="https://github.com/tiisto/spa" target="_blank">tiisto/spa</a></li>
                </ul>
                <p>Feel free to fork this project, open issues, or submit pull requests!</p>
                <p><em>This SPA is powered by Frankenstein ⚡ — a modern digital creature stitched together with code.</em></p>
            </div>
        `
    }
};

// Router function
function navigate(route) {
    const page = routes[route] || routes.home;
    const contentDiv = document.getElementById('content');
    
    // Update content
    contentDiv.innerHTML = page.content;
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${route}`) {
            link.classList.add('active');
        }
    });
    
    // Update page title
    document.title = `SPA - ${page.title}`;
}

// Handle hash changes
window.addEventListener('hashchange', () => {
    const route = window.location.hash.slice(1) || 'home';
    navigate(route);
});

// Handle navigation clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const route = link.getAttribute('href').slice(1);
        window.location.hash = route;
    });
});

// Load initial page
window.addEventListener('DOMContentLoaded', () => {
    const route = window.location.hash.slice(1) || 'home';
    navigate(route);
});
