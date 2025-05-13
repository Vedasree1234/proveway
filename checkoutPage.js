const radioButtons = document.querySelectorAll('input[type="radio"][name="product"]');
const totalSpan = document.getElementById('total');
const optionBoxes = document.querySelectorAll('.option-box');

radioButtons.forEach(radio => {
  radio.addEventListener('change', () => {
    optionBoxes.forEach(box => {
      const expandSection = box.querySelector('.expand-section');
      expandSection.style.display = 'none';
      box.classList.remove('active');
    });

    const selectedBox = radio.closest('.option-box');
    selectedBox.querySelector('.expand-section').style.display = 'block';
    selectedBox.classList.add('active');

    const price = parseFloat(radio.dataset.price);
    totalSpan.textContent = price.toFixed(2);

    const pairCount = parseInt(radio.value); // 1, 2, or 3
    const tbody = selectedBox.querySelector('.pair-options');
    tbody.innerHTML = ''; // Clear old rows

    for (let i = 0; i < pairCount; i++) {
     const row = document.createElement('tr');

const pairNumberCell = document.createElement('td');
pairNumberCell.textContent = `${i + 1}`;
row.appendChild(pairNumberCell);

      const sizeCell = document.createElement('td');
      const sizeSelect = document.createElement('select');
      ['S', 'M', 'L', 'XL', 'XXL'].forEach(size => {
        const option = document.createElement('option');
        option.text = size;
        sizeSelect.add(option);
      });
      sizeCell.appendChild(sizeSelect);

      const colorCell = document.createElement('td');
      const colorSelect = document.createElement('select');
      ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Gray', 'Purple', 'Orange', 'Pink', 'Brown', 'Cyan', 'Magenta', 'Teal', 'Navy']
        .forEach(color => {
          const option = document.createElement('option');
          option.value = color.toLowerCase();
          option.text = color;
          colorSelect.add(option);
        });
      colorCell.appendChild(colorSelect);

      row.appendChild(sizeCell);
      row.appendChild(colorCell);

      tbody.appendChild(row);
    }
  });
});

// Size chart modal logic
const sizeChartButtons = document.querySelectorAll(".sizeChartBtn");
const modal = document.getElementById("sizeChartModal");
const closeBtn = document.getElementById("closeModalBtn");

sizeChartButtons.forEach(button => {
  button.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
