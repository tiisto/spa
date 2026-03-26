// ZywOo Fanpage - SPA Router
const routes = {
    home: {
        title: 'Home',
        content: `
            <div class="page">
                <div class="hero-section">
                    <h2>🎯 Mathieu "ZywOo" Herbaut</h2>
                    <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80" 
                         alt="Counter-Strike player" 
                         class="player-image">
                    <p style="font-size: 1.2rem; margin-top: 1rem;">
                        <strong>The French Phenomenon | Team Vitality AWPer</strong>
                    </p>
                </div>
                
                <div class="highlight-box">
                    <h3>🏆 HLTV Player of the Year 2025</h3>
                    <p>ZywOo dominated CS2 in 2025, winning his <strong>4th HLTV Player of the Year</strong> award and cementing his legacy as one of the greatest players in Counter-Strike history.</p>
                </div>

                <h3>About ZywOo</h3>
                <p>Mathieu "ZywOo" Herbaut is a French professional Counter-Strike player for Team Vitality. Known for his incredible AWP skills, game sense, and clutch performances, ZywOo is widely regarded as one of the best players in the world.</p>
                
                <p>Born in France, ZywOo joined Team Vitality in 2018 and quickly became the face of the franchise, leading them to numerous tournament victories and establishing himself as a consistent force at the highest level of competition.</p>

                <div class="stats-grid">
                    <div class="stat-card">
                        <span class="stat-number">4x</span>
                        <span class="stat-label">HLTV #1 Player</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">3x</span>
                        <span class="stat-label">Major MVP</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">28</span>
                        <span class="stat-label">Career MVPs</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">🐝</span>
                        <span class="stat-label">Team Vitality</span>
                    </div>
                </div>
            </div>
        `
    },
    stats: {
        title: 'Stats',
        content: `
            <div class="page">
                <h2>📊 Career Statistics</h2>
                
                <div class="highlight-box">
                    <h3>🔥 2025 Season Highlights</h3>
                    <ul>
                        <li><strong>9 Tournament Wins</strong> including 2 Majors</li>
                        <li><strong>8 MVP Awards</strong> across 16 events (50% MVP rate)</li>
                        <li><strong>5 EVP Awards</strong> (Exceptional Valuable Player)</li>
                        <li><strong>First player</strong> to win 3 Major MVPs</li>
                        <li><strong>Led Vitality</strong> to 7 consecutive Big Event wins</li>
                    </ul>
                </div>

                <h3>Major Achievements</h3>
                <ul>
                    <li>HLTV #1 Player: 2019, 2020, 2023, 2025</li>
                    <li>HLTV AWPer of the Year: 2025 (and multiple previous years)</li>
                    <li>Major Championships: 2 in 2025 (Austin, Budapest)</li>
                    <li>Intel Grand Slam Winner with Vitality</li>
                    <li>ESL Pro League Season 22 Champion</li>
                </ul>

                <h3>Playing Style</h3>
                <p>ZywOo is known for his:</p>
                <ul>
                    <li>Exceptional AWP accuracy and positioning</li>
                    <li>Incredible game sense and map awareness</li>
                    <li>Clutch performances in high-pressure situations</li>
                    <li>Versatility (can rifle when needed)</li>
                    <li>Consistent high-level performance across all tournaments</li>
                </ul>
            </div>
        `
    },
    achievements: {
        title: 'Achievements',
        content: `
            <div class="page">
                <h2>🏆 Achievements</h2>

                <h3>2025 - Historic Dominance</h3>
                <div class="highlight-box">
                    <p><strong>Team Vitality's Perfect Season</strong></p>
                    <ul>
                        <li>🏆 BLAST.tv Austin Major 2025 (MVP)</li>
                        <li>🏆 StarLadder Budapest Major 2025 (MVP)</li>
                        <li>🏆 IEM Dallas 2025</li>
                        <li>🏆 Intel Grand Slam</li>
                        <li>🏆 ESL Pro League Season 22</li>
                        <li>🏆 7 Consecutive Big Event Wins</li>
                        <li>📊 31 Consecutive Playoff Appearances (Record)</li>
                        <li>🎯 Never finished outside Top 4 in 2025</li>
                    </ul>
                </div>

                <h3>Individual Awards</h3>
                <ul>
                    <li>🥇 HLTV #1 Player of the Year 2025</li>
                    <li>🎯 HLTV AWPer of the Year 2025</li>
                    <li>🏆 3x Major MVP (Record)</li>
                    <li>⭐ 28 Career MVP Awards</li>
                    <li>🔥 50% MVP Rate in 2025 (8/16 events)</li>
                </ul>

                <h3>Records & Milestones</h3>
                <ul>
                    <li>First player to win 3 Major MVPs</li>
                    <li>4-time HLTV #1 Player (2019, 2020, 2023, 2025)</li>
                    <li>Tied highest MVP rate in a single year (with s1mple)</li>
                    <li>Key player in Vitality's 31-event playoff streak</li>
                    <li>Undefeated vs donk in 5 playoff clashes (2025)</li>
                </ul>

                <h3>Team Vitality Roster (2025)</h3>
                <ul>
                    <li>🎯 ZywOo (AWPer)</li>
                    <li>🎮 ropz (HLTV #3 in 2025)</li>
                    <li>🎮 mezii</li>
                    <li>🎮 flameZ</li>
                    <li>👨‍✈️ apEX (IGL)</li>
                </ul>
            </div>
        `
    },
    highlights: {
        title: 'Highlights',
        content: `
            <div class="page">
                <h2>🎥 Highlights & Links</h2>

                <div class="highlight-box">
                    <h3>📺 Watch ZywOo</h3>
                    <p>Follow ZywOo and Team Vitality across their channels:</p>
                    <ul>
                        <li><strong>HLTV:</strong> <a href="https://www.hltv.org/player/11893/ZywOo" target="_blank" style="color: #ffa900;">ZywOo Profile</a></li>
                        <li><strong>Team Vitality:</strong> <a href="https://vitality.gg/" target="_blank" style="color: #ffa900;">Official Website</a></li>
                        <li><strong>Twitch:</strong> Search for "ZywOo" or "TeamVitality"</li>
                        <li><strong>Twitter:</strong> Follow @Vitality and @ZywOoCS</li>
                    </ul>
                </div>

                <h3>🔥 Iconic Moments</h3>
                <ul>
                    <li>Back-to-back Major wins in 2025 (first since Astralis 2019)</li>
                    <li>3rd Major MVP - Breaking records</li>
                    <li>7 consecutive Big Event victories with Vitality</li>
                    <li>Dominating donk in all 5 playoff matches</li>
                    <li>50% MVP rate across 2025 season</li>
                </ul>

                <h3>🎬 Documentary</h3>
                <p>A 2025 documentary chronicles ZywOo, ropz, mezii, flameZ, and apEX building Team Vitality's dominant era in Counter-Strike 2.</p>

                <h3>💬 Community</h3>
                <p>Join the ZywOo and Team Vitality community:</p>
                <ul>
                    <li>Discuss plays and matches on HLTV forums</li>
                    <li>Follow tournament streams on Twitch</li>
                    <li>Join Vitality Discord for fan discussions</li>
                    <li>Watch VOD reviews and analysis</li>
                </ul>

                <div class="highlight-box">
                    <p style="text-align: center; font-size: 1.2rem;">
                        <strong>#VITWIN 🐝 | #ZywOo 🎯</strong>
                    </p>
                </div>
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
    document.title = `ZywOo - ${page.title}`;
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
