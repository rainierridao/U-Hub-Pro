const scriptURL = 'https://script.google.com/macros/s/AKfycbwdErQVdZCbDIOys7Yubq8boZ1yiHM6qcb7PmrfFU2YMO_aBPnyThABlM7uI-MSZCO6/exec';

const dropdown = document.getElementById('illnessSelect');
const titleDiv = document.getElementById('illnessTitle');
const descriptionDiv = document.getElementById('illnessDescription');
const optimalTable = document.getElementById('optimalDoseTableBody');
const minimalTable = document.getElementById('minimalDoseTableBody');
const loader = document.getElementById('loader'); // 👈 Loader element

let cachedData = {}; // 🧠 One-time fetch + in-memory cache

function fixDose(value) {
  if (value === 45659) return '1/2';
  return value || '0';
}

function createRow(item) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td style="padding: 0.5rem; text-align: left;">${item.product}</td>
    <td style="padding: 0.5rem; text-align: center;">${fixDose(item.breakfast)}</td>
    <td style="padding: 0.5rem; text-align: center;">${fixDose(item.lunch)}</td>
    <td style="padding: 0.5rem; text-align: center;">${fixDose(item.dinner)}</td>
  `;
  return row;
}

window.addEventListener('DOMContentLoaded', async () => {
  try {
    loader.style.display = 'flex'; // 👈 Show loader

    // Fetch everything at once
    const res = await fetch(`${scriptURL}?all=true`);
    cachedData = await res.json();

    // Populate dropdown
    dropdown.innerHTML = '<option value="" selected disabled>Select an Illness</option>';
    Object.keys(cachedData).forEach(disease => {
      const option = document.createElement('option');
      option.value = disease;
      option.textContent = disease;
      dropdown.appendChild(option);
    });

  } catch (err) {
    console.error('Error loading illness data:', err);
  } finally {
    loader.style.display = 'none'; // 👈 Hide loader when done
  }
});

dropdown.addEventListener('change', () => {
  const selected = dropdown.value;
  if (!selected || !cachedData[selected]) return;

  const data = cachedData[selected];

  titleDiv.textContent = selected;
  descriptionDiv.textContent = data.description || 'No description available.';
  optimalTable.innerHTML = '';
  minimalTable.innerHTML = '';

  data.doses.optimal.forEach(item => {
    optimalTable.appendChild(createRow(item));
  });

  data.doses.minimal.forEach(item => {
    minimalTable.appendChild(createRow(item));
  });
});
