function showSection(sectionKey) {
  const section = sections[sectionKey];
  const panelContent = document.getElementById("panel-content");
  const title = document.getElementById("section-title");
  const list = document.getElementById("site-list");

  // Step 1: Fade out
  panelContent.classList.add("hidden");

  setTimeout(() => {
    // Step 2: Update content
    title.textContent = section.title;
    list.innerHTML = section.sites.map(site => `
      <li class="site-item">
        <a href="${site.url}" target="_blank">
          ${site.name}
          ${site.trusted ? '<span class="star">★</span>' : ''}
        </a>
        <div class="site-description">${site.description}</div>
      </li>
    `).join("");

    // Step 3: Fade in
    panelContent.classList.remove("hidden");
  }, 250); // Delay matches the transition duration
}
