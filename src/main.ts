let DATA_BASE: { firstName: string; lastName: string; age: number }[] = [];

function add() {
  const mainElements = document.getElementById(`alles`)!;

  const newPerson = `<div class="person">
  <label>Photo</label>
  <input type="image" /><br />
  <label>First Name:</label>
  <input type="text" id="fName" /><br />
  <label>Last Name:</label>
  <input type="text" id="lName" /><br />
  <label>Age:</label>
  <input type="number" min="0" id="age" /><br />
  <button id="submit" onclick="submit()">submit</button>
</div>`;

  mainElements.innerHTML = mainElements.innerHTML + newPerson;
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

  update();
}

function update() {
  const mainElements = document.getElementById(`alles`)!;
  const acceptPerson = DATA_BASE.map(
    (person, index) => `<div class="person">
  <label>Photo</label>
  <input type="image" /><br />
  <label>First Name:</label>
  <p id="fName">${
    person.firstName === "" ? `<i>nothing typed</i>` : person.firstName
  } </p><br />
  <label>Last Name:</label>
  <p id="lName">${
    person.lastName === "" ? `<i>nothing typed</i>` : person.lastName
  }</p><br />
  <label>Age:</label>
  <p id="age">${
    isNaN(person.age) ? `<i>nothing typed</i>` : person.age
  }</p><br />
  <button id="edit" onclick="edit(${index})">edit</button>
</div>`
  ).join("");
  mainElements.innerHTML = acceptPerson;
}
