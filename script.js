document.addEventListener('DOMContentLoaded', () => {
  const ageForm = document.getElementById('ageForm');
  const result = document.getElementById('result');

  ageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      calculateAge();
  });

  function calculateAge() {
      const day = parseInt(document.getElementById('day').value);
      const month = parseInt(document.getElementById('month').value) - 1; // Months are 0-indexed
      const year = parseInt(document.getElementById('year').value);

      const birthDate = new Date(year, month, day);
      const currentDate = new Date();

      if (birthDate > currentDate) {
          result.textContent = 'Birth date cannot be in the future';
          return;
      }

      let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
      let ageMonths = currentDate.getMonth() - birthDate.getMonth();
      let ageDays = currentDate.getDate() - birthDate.getDate();

      if (ageDays < 0) {
          ageMonths--;
          ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate(); // Days in the previous month
      }

      if (ageMonths < 0) {
          ageYears--;
          ageMonths += 12;
      }

      result.textContent = `Age: ${ageYears} years, ${ageMonths} months, and ${ageDays} days`;
  }
});
