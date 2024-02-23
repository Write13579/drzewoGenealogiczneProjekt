let DATA_BASE: { firstName: string; LastName: string; age: number }[] = [];

function add() {
  const mainElements = document.getElementById(`alles`)!;

  const SETUP = `<div class="person">
  <label>Photo</label>
  <input type="image" /><br />
  <label>First Name</label>
  <input type="text" /><br />
  <label>Last Name</label>
  <input type="text" /><br />
  <label>Age</label>
  <input type="number" min="0" /><br />
</div>`;

  mainElements.innerHTML = mainElements.innerHTML + SETUP;

  DATA_BASE.push();
}
