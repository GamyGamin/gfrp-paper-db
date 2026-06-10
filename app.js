const targetGrid = document.getElementById("target-grid");
const recordList = document.getElementById("record-list");
const paperCount = document.getElementById("paper-count");

paperCount.textContent = papers.length;

targetMaterials.forEach((item) => {
  const card = document.createElement("article");
  card.className = "target-card";
  card.innerHTML = `
    <h3>${item.name}</h3>
    <p>${item.note}</p>
    <div class="tag-row">
      <span class="tag exact">Exact target</span>
      <span class="tag">${item.evidenceCount} papers stored</span>
    </div>
  `;
  targetGrid.appendChild(card);
});

papers.forEach((paper) => {
  const card = document.createElement("article");
  card.className = "record-card";
  card.innerHTML = `
    <div class="record-top">
      <div class="record-heading">
        <div class="tag-row">
          <a class="tag tag-link" href="${paper.page}">${paper.id}</a>
          <span class="tag ${paper.relevance}">${paper.relevance === "related" ? "Related material" : "Exact match"}</span>
        </div>
        <h3><a class="record-link" href="${paper.page}">Paper ${paper.id}: ${paper.polymerName}</a></h3>
        <p class="record-subtitle"><a class="record-link subtle" href="${paper.page}">${paper.title}</a></p>
      </div>
    </div>
    <div class="paper-meta-grid">
      <div class="meta-tile">
        <span class="meta-key">Polymer / composite</span>
        <strong>${paper.polymerName}</strong>
      </div>
      <div class="meta-tile">
        <span class="meta-key">Publisher URL</span>
        <a href="${paper.source.articleUrl}" target="_blank" rel="noreferrer">Open publisher page</a>
      </div>
      <div class="meta-tile">
        <span class="meta-key">DOI</span>
        <a href="${paper.source.doiUrl}" target="_blank" rel="noreferrer">${paper.source.doi}</a>
      </div>
    </div>
    <p class="record-summary">${paper.summary}</p>
    <a class="button-link" href="${paper.page}">Open paper detail page</a>
  `;
  recordList.appendChild(card);
});
