let DATA_BASE: { firstName: string; lastName: string; age: number }[] = [];

function add() {
  const mainElements = document.getElementById(`alles`)!;

  const SETUP = `<div class="person">
  <label>Photo</label>
  <input type="image" /><br />
  <label>First Name</label>
  <input type="text" id="fName" /><br />
  <label>Last Name</label>
  <input type="text" id="lName" /><br />
  <label>Age</label>
  <input type="number" min="0" id="age" /><br />
  <button id="submit" onclick="submit()">submit</button>
</div>`;

  mainElements.innerHTML = mainElements.innerHTML + SETUP;
}

function submit() {
  const fName = document.getElementById(`fName`) as HTMLInputElement;
  const lName = document.getElementById(`lName`) as HTMLInputElement;
  const age = document.getElementById(`age`) as HTMLInputElement;

  DATA_BASE.push({
    firstName: fName.value,
    lastName: lName.value,
    age: parseInt(age.value),
  });

  console.log(DATA_BASE);
}
