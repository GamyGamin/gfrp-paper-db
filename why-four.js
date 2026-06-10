const whyTitle = document.getElementById("why-title");
const whySummary = document.getElementById("why-summary");
const whySwitcher = document.getElementById("why-switcher");
const whyDetail = document.getElementById("why-detail");
const binderGrid = document.getElementById("binder-grid");
const processNotes = document.getElementById("process-notes");

whyTitle.textContent = whyFour.title;
whySummary.textContent = whyFour.summary;

function renderWhyDetail(index) {
  const item = whyFour.materials[index];

  Array.from(whySwitcher.querySelectorAll("button")).forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === index);
  });

  whyDetail.innerHTML = `
    <article class="why-card">
      <div class="why-card-head">
        <div>
          <p class="eyebrow">Selected Material</p>
          <h3>${item.name}</h3>
        </div>
        <span class="tag exact">${item.shortLabel}</span>
      </div>
      <p class="why-headline">${item.headline}</p>
      <div class="why-grid">
        <section class="property-group">
          <h4>Why Selected</h4>
          <p>${item.why}</p>
        </section>
        <section class="property-group">
          <h4>Typical Use</h4>
          <ul class="detail-list">${item.typicalUse.map((entry) => `<li>${entry}</li>`).join("")}</ul>
        </section>
        <section class="property-group">
          <h4>Property Focus</h4>
          <ul class="detail-list">${item.propertyFocus.map((entry) => `<li>${entry}</li>`).join("")}</ul>
        </section>
      </div>
    </article>
  `;
}

whyFour.materials.forEach((item, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "why-tab";
  button.innerHTML = `
    <span class="why-tab-label">${item.shortLabel}</span>
    <strong>${item.name}</strong>
  `;
  button.addEventListener("click", () => renderWhyDetail(index));
  whySwitcher.appendChild(button);
});

renderWhyDetail(0);

whyFour.binderNotes.forEach((item) => {
  const card = document.createElement("article");
  card.className = "property-group binder-card";
  card.innerHTML = `
    <h4>${item.title}</h4>
    <p class="binder-role">${item.role}</p>
    <p>${item.detail}</p>
  `;
  binderGrid.appendChild(card);
});

processNotes.innerHTML = whyFour.processNotes
  .map((item) => `<li>${item}</li>`)
  .join("");
