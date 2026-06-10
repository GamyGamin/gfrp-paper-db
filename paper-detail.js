const paperId = document.body.dataset.paperId;
const paper = papers.find((item) => item.id === paperId);

if (!paper) {
  document.querySelector("main").innerHTML = `
    <section class="panel">
      <div class="section-head">
        <div>
          <p class="eyebrow">Missing Record</p>
          <h2>Paper data could not be loaded</h2>
        </div>
      </div>
      <p class="section-note">Return to the database and choose one of the available paper records.</p>
    </section>
  `;
  throw new Error(`Paper record ${paperId} was not found.`);
}

document.getElementById("paper-title").textContent = `Paper ${paper.id}: ${paper.title}`;
document.getElementById("paper-polymer").textContent = `${paper.polymerName} (${paper.relevance === "related" ? "related reference material" : "exact target material"})`;

document.getElementById("paper-links").innerHTML = `
  <div>
    <span class="meta-label">DOI</span>
    <strong><a href="${paper.source.doiUrl}" target="_blank" rel="noreferrer">${paper.source.doi}</a></strong>
  </div>
  <div>
    <span class="meta-label">Publisher</span>
    <strong><a href="${paper.source.articleUrl}" target="_blank" rel="noreferrer">Open article page</a></strong>
  </div>
  <div>
    <span class="meta-label">Local PDF</span>
    <strong><a href="${paper.source.localFile}" target="_blank" rel="noreferrer">Open PDF</a></strong>
  </div>
`;

function renderKeyValueTable(tableId, headers, rows) {
  const table = document.getElementById(tableId);
  const thead = `<thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>`;
  const tbody = `<tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>`;
  table.innerHTML = thead + tbody;
}

renderKeyValueTable(
  "material-table",
  ["Field", "Value"],
  [
    ["Fiber system", paper.materialSummary.fiberSystem],
    ["Resin system", paper.materialSummary.resinSystem],
    ["Manufacturing method", paper.materialSummary.manufacturing],
    ["Layup", paper.materialSummary.layup],
    ["Reported orientation", paper.materialSummary.orientation],
    ["Fiber volume fraction", paper.materialSummary.fiberVolumeFraction]
  ]
);

renderKeyValueTable(
  "tensile-table",
  ["Property", "Value", "Unit"],
  paper.tensileProperties.map((item) => [item.property, item.value, item.unit])
);

if (paper.experimentalData && paper.experimentalData.length > 0) {
  document.getElementById("experimental-section").hidden = false;
  document.getElementById("experimental-title").textContent = paper.experimentalDataTitle || "Additional Data";
  renderKeyValueTable(
    "experimental-table",
    paper.experimentalDataHeaders || ["Field", "Value"],
    paper.experimentalData
  );
}

if (paper.fatigueData && paper.fatigueData.length > 0) {
  document.getElementById("fatigue-section").hidden = false;
  renderKeyValueTable(
    "fatigue-table",
    ["Stress level (% of UTS)", "Stress (MPa)", "Fatigue life", "Note"],
    paper.fatigueData.map((item) => [
      `${item.stressLevel}%`,
      `${item.stressMpa} MPa`,
      item.fatigueLifeLabel,
      item.runout ? "Runout" : item.inferred ? "Inferred from published fit" : "Reported"
    ])
  );
}

renderKeyValueTable(
  "setup-table",
  ["Parameter", "Value"],
  paper.fatigueSetup.map((item) => [item.label, item.value])
);

document.getElementById("findings-list").innerHTML = paper.keyFindings
  .map((item) => `<li>${item}</li>`)
  .join("");

function renderSnChart(svgId, data) {
  const svg = document.getElementById(svgId);
  const width = 860;
  const height = 460;
  const margin = { top: 28, right: 32, bottom: 70, left: 88 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  const xValues = data.map((item) => item.fatigueLife);
  const yValues = data.map((item) => item.stressMpa);
  const xMin = Math.floor(Math.log10(Math.min(...xValues)));
  const xMax = Math.ceil(Math.log10(Math.max(...xValues)));
  const yMin = Math.max(0, Math.floor((Math.min(...yValues) - 20) / 10) * 10);
  const yMax = Math.ceil((Math.max(...yValues) + 20) / 10) * 10;

  const x = (cycles) => margin.left + ((Math.log10(cycles) - xMin) / (xMax - xMin)) * plotWidth;
  const y = (stress) => margin.top + (1 - (stress - yMin) / (yMax - yMin)) * plotHeight;

  const xTicks = [];
  for (let tick = xMin; tick <= xMax; tick += 1) {
    xTicks.push({ value: 10 ** tick, label: `10^${tick}` });
  }

  const yTicks = [];
  for (let tick = yMin; tick <= yMax; tick += 10) {
    yTicks.push(tick);
  }

  const points = data.map((item) => `${x(item.fatigueLife)},${y(item.stressMpa)}`).join(" ");

  const gridX = xTicks.map((tick) => `
    <line x1="${x(tick.value)}" y1="${margin.top}" x2="${x(tick.value)}" y2="${height - margin.bottom}" class="grid-line" />
    <text x="${x(tick.value)}" y="${height - margin.bottom + 24}" text-anchor="middle" class="axis-label">${tick.label}</text>
  `).join("");

  const gridY = yTicks.map((tick) => `
    <line x1="${margin.left}" y1="${y(tick)}" x2="${width - margin.right}" y2="${y(tick)}" class="grid-line" />
    <text x="${margin.left - 14}" y="${y(tick) + 5}" text-anchor="end" class="axis-label">${tick}</text>
  `).join("");

  const pointMarks = data.map((item) => `
    <circle cx="${x(item.fatigueLife)}" cy="${y(item.stressMpa)}" r="5.5" class="${item.runout ? "point runout-point" : item.inferred ? "point inferred-point" : "point"}" />
    <text x="${x(item.fatigueLife) + 10}" y="${y(item.stressMpa) - 10}" class="point-label">${item.stressLevel}%</text>
  `).join("");

  svg.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" rx="24" class="chart-bg"></rect>
    ${gridX}
    ${gridY}
    <line x1="${margin.left}" y1="${height - margin.bottom}" x2="${width - margin.right}" y2="${height - margin.bottom}" class="axis-line" />
    <line x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${height - margin.bottom}" class="axis-line" />
    <polyline points="${points}" class="sn-line" />
    ${pointMarks}
    <g aria-hidden="true">
      <circle cx="${width - 252}" cy="34" r="5.5" class="point" />
      <text x="${width - 238}" y="39" class="axis-label">Reported</text>
      <circle cx="${width - 162}" cy="34" r="5.5" class="point inferred-point" />
      <text x="${width - 148}" y="39" class="axis-label">Inferred</text>
      <circle cx="${width - 74}" cy="34" r="5.5" class="point runout-point" />
      <text x="${width - 60}" y="39" class="axis-label">Runout</text>
    </g>
    <text x="${width / 2}" y="${height - 18}" text-anchor="middle" class="axis-title">Fatigue life, N (cycles, log scale)</text>
    <text x="24" y="${height / 2}" text-anchor="middle" transform="rotate(-90 24 ${height / 2})" class="axis-title">Maximum stress (MPa)</text>
  `;
}

if (paper.fatigueData && paper.fatigueData.length > 0) {
  document.getElementById("graph-section").hidden = false;
  renderSnChart("sn-chart", paper.fatigueData);
}
