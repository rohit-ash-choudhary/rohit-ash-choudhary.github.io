// Load configuration and update page content
document.addEventListener('DOMContentLoaded', function() {
  // Wait for config to load
  if (typeof CONFIG !== 'undefined') {
    updatePageContent();
    setupHeroSocial();
    // Setup random fact if on random-fact page
    if (window.location.pathname.includes('random-fact.html')) {
      setupRandomFact();
    }
  } else {
    // If config hasn't loaded yet, wait a bit
    setTimeout(() => {
      if (typeof CONFIG !== 'undefined') {
        updatePageContent();
        setupHeroSocial();
        // Setup random fact if on random-fact page
        if (window.location.pathname.includes('random-fact.html')) {
          setupRandomFact();
        }
      }
    }, 100);
  }

  // Setup scroll animations
  setupScrollAnimations();
});

function updatePageContent() {
  // Update page title
  const pageTitle = document.getElementById('page-title');
  if (pageTitle && CONFIG.name) {
    pageTitle.textContent = `${CONFIG.name} — ${CONFIG.title}`;
  }

  // Note: Name display is now hardcoded in HTML with highlights, so we don't update it here

  // Update hero subtitle with skills
  const heroSubtitle = document.getElementById('hero-subtitle');
  if (heroSubtitle && CONFIG.skills) {
    // Show title + specific skills: Java, Spring Boot, AI, Kafka, AWS, Oracle, DevOps
    const displaySkills = ["Java", "Spring Boot", "AI", "Kafka", "AWS", "Oracle", "DevOps"];
    heroSubtitle.textContent = `${CONFIG.title} · ${displaySkills.join(' · ')}`;
  }

  // Note: Hero title is now hardcoded in HTML with highlights, so we don't update it here

  // Update bio text - handled in HTML now, but keep for compatibility
  // Bio is now structured in HTML with paragraphs
}

function setupScrollAnimations() {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });
}

function setupRandomFact() {
  const factText = document.getElementById('fact-text');
  const newFactBtn = document.getElementById('new-fact-btn');
  
  if (!factText || !newFactBtn || !CONFIG.randomFacts) return;

  let currentFactIndex = -1;

  function getRandomFact() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * CONFIG.randomFacts.length);
    } while (newIndex === currentFactIndex && CONFIG.randomFacts.length > 1);
    
    currentFactIndex = newIndex;
    return CONFIG.randomFacts[currentFactIndex];
  }

  function displayFact() {
    factText.style.opacity = '0';
    factText.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      factText.textContent = getRandomFact();
      factText.style.opacity = '1';
      factText.style.transform = 'translateY(0)';
    }, 300);
  }

  // Initial fact
  displayFact();

  // Button click handler
  newFactBtn.addEventListener('click', displayFact);
}

function setupSkills() {
  const skillsContainer = document.getElementById('skills-container');
  if (!skillsContainer || !CONFIG.skillsDetailed) return;

  const skills = CONFIG.skillsDetailed;
  
  skillsContainer.innerHTML = `
    <div class="skill-category">
      <h3 class="skill-category-title">Programming</h3>
      <div class="skill-tags">
        ${skills.programming.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    </div>
    <div class="skill-category">
      <h3 class="skill-category-title">Frameworks</h3>
      <div class="skill-tags">
        ${skills.frameworks.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    </div>
    <div class="skill-category">
      <h3 class="skill-category-title">Application Servers</h3>
      <div class="skill-tags">
        ${skills.applicationServers.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    </div>
    <div class="skill-category">
      <h3 class="skill-category-title">Tools</h3>
      <div class="skill-tags">
        ${skills.tools.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    </div>
    <div class="skill-category">
      <h3 class="skill-category-title">Databases</h3>
      <div class="skill-tags">
        ${skills.databases.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    </div>
    <div class="skill-category">
      <h3 class="skill-category-title">Cloud & DevOps</h3>
      <div class="skill-tags">
        ${skills.cloudDevOps.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    </div>
  `;
}

function setupHeroSocial() {
  const heroSocial = document.getElementById('hero-social');
  if (!heroSocial || !CONFIG.contact) return;

  const contact = CONFIG.contact;
  let socialHTML = '';

  if (contact.email) {
    socialHTML += `
      <a href="mailto:${contact.email}" class="hero-social-link email" title="Email">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
        <span>Email</span>
      </a>
    `;
  }

  if (contact.github) {
    socialHTML += `
      <a href="${contact.github}" target="_blank" class="hero-social-link github" title="GitHub">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        <span>GitHub</span>
      </a>
    `;
  }

  if (contact.linkedin) {
    socialHTML += `
      <a href="${contact.linkedin}" target="_blank" class="hero-social-link linkedin" title="LinkedIn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        <span>LinkedIn</span>
      </a>
    `;
  }

  if (contact.twitter) {
    socialHTML += `
      <a href="${contact.twitter}" target="_blank" class="hero-social-link twitter" title="Twitter">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
        <span>Twitter</span>
      </a>
    `;
  }

  if (contact.instagram) {
    socialHTML += `
      <a href="${contact.instagram}" target="_blank" class="hero-social-link instagram" title="Instagram">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        <span>Instagram</span>
      </a>
    `;
  }

  heroSocial.innerHTML = socialHTML;
}
