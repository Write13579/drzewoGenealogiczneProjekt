enum PersonMode {
  EDITING = `EDIT`,
  VIEW = `WIDOK`,
}

const DATA_BASE: {
  firstName: string;
  lastName: string;
  age: number;
  mode: PersonMode;
}[] = [];

const mainElements = document.getElementById(`alles`)!;

function createForm(index: number) {
  return `<div class="person">
  <label>First Name:</label>
  <input type="text" id="fName${index}" onchange="fNameUpdate(this.value, ${index})" onkeydown="keyDown(event.key, ${index})"/><br />
  <label>Last Name:</label>
  <input type="text" id="lName${index}" onchange="lNameUpdate(this.value, ${index})" onkeydown="keyDown(event.key, ${index})"/><br />
  <label>Age:</label>
  <input type="number" min="0" id="age${index}" onchange="ageUpdate(this.value, ${index})" onkeydown="keyDown(event.key, ${index})"/><br />
  <button id="submit" onclick="submit(${index})">submit</button>
</div>`;
}

function fNameUpdate(value: string, index: number) {
  DATA_BASE[index].firstName = value;
}
function lNameUpdate(value: string, index: number) {
  DATA_BASE[index].lastName = value;
}
function ageUpdate(value: string, index: number) {
  DATA_BASE[index].age = parseInt(value);
}

function add() {
  DATA_BASE.push({
    firstName: "",
    lastName: "",
    age: NaN,
    mode: PersonMode.EDITING,
  });
  const newPerson = createForm(DATA_BASE.length - 1);
  mainElements.innerHTML = mainElements.innerHTML + newPerson;
  update();
}

function submit(index: number) {
  DATA_BASE[index].mode = PersonMode.VIEW;
  update();
}

function edit(index: number) {
  DATA_BASE[index].mode = PersonMode.EDITING;
  update();
}

function update() {
  const newPeople = DATA_BASE.map((person, index) => {
    if (person.mode === PersonMode.EDITING) {
      return createForm(index);
    } else if (person.mode === PersonMode.VIEW) {
      return `<div class="person">
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
</div>`;
    }
  });

  mainElements.innerHTML = newPeople.join();

  DATA_BASE.forEach((person, index) => {
    if (person.mode === PersonMode.VIEW) return;
    const inpFN = document.getElementById(`fName${index}`) as HTMLInputElement;
    const inpLN = document.getElementById(`lName${index}`) as HTMLInputElement;
    const inpage = document.getElementById(`age${index}`) as HTMLInputElement;

    inpFN.defaultValue = person.firstName;
    inpLN.defaultValue = person.lastName;
    inpage.defaultValue = person.age.toString();
  });
}

function keyDown(key: string, index: number) {
  console.log(key);
  if (key === "Enter") {
    submit(index);
  }
}
