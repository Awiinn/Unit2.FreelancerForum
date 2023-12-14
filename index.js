const app = document.getElementById("app");
app.style.width = "50%";
app.style.margin = "0 auto";
const maxFreelancers = 10;
const freelancers = [
  {
    name: "John",
    price: 50,
    occupation: "Electrician",
  },
  {
    name: "Maxine",
    price: 30,
    occupation: "Chef",
  },
  {
    name: "Timmy",
    price: 80,
    occupation: "Gardener",
  },
  {
    name: "Carol",
    price: 100,
    occupation: "Teacher",
  },
];

const findAveragePrice = (arr) => {
  const { length } = arr;
  return arr.reduce((acc, val) => {
    return acc + val.price / length;
  }, 0);
};

let averagePrice = 0;
// console.log(findAveragePrice(arr));

const table = document.createElement("table");
table.className = "table";
app.appendChild(table);

const thead = document.createElement("thead");
thead.innerHTML = "<h1>Freelancer Forum</h1>";
table.appendChild(thead);

const theadp = document.createElement("theadp");
theadp.innerHTML = `<p>Average freelancer price is: $${findAveragePrice(
  freelancers
)}/Hr</p>`;
thead.appendChild(theadp);

const tr = document.createElement("tr");
thead.appendChild(tr);

const thName = document.createElement("th");
thName.innerHTML = "Name";
tr.appendChild(thName);

const thOccu = document.createElement("th");
thOccu.innerHTML = "Occupation";
tr.appendChild(thOccu);

const thPrice = document.createElement("th");
thPrice.innerHTML = "Price";
tr.appendChild(thPrice);

const tbody = document.createElement("tbody");
table.appendChild(tbody);

const display = () => {
  freelancers.forEach((element) => {
    const trBody = document.createElement("tr");
    tbody.appendChild(trBody);

    const tdName = document.createElement("td");
    tdName.innerHTML = element.name;
    trBody.appendChild(tdName);

    const tdOccu = document.createElement("td");
    tdOccu.innerHTML = element.occupation;
    trBody.appendChild(tdOccu);

    const tdPrice = document.createElement("td");
    tdPrice.innerHTML = element.price;
    trBody.appendChild(tdPrice);
  });
};
display();
// let i = 0;
// const display = () => {
//   while (i < freelancers.length && i<maxFreelancers) {
//     const trBody = document.createElement("tr");
//     tbody.appendChild(trBody);

//     const tdName = document.createElement("td");
//     tdName.innerHTML = freelancers[i].name;
//     trBody.appendChild(tdName);

//     const tdOccu = document.createElement("td");
//     tdOccu.innerHTML = freelancers[i].occupation;
//     trBody.appendChild(tdOccu);

//     const tdPrice = document.createElement("td");
//     tdPrice.innerHTML = freelancers[i].price;
//     trBody.appendChild(tdPrice);
//     i++;
//   }
// };
// display();
// Made a new set of arrays, and a new obj array. Trying to turn it into a random string using interpolation.

const names = ["Joe", "Alex", "Heather", "Devon"];

const occupations = [
  "Swim Instructor",
  "Sleep Tech",
  "Cosmetologist",
  "Surfer",
];
// const newFreelancers = [];
const prices = [40, 20, 70, 60];
const addToArray = () => {
  const randomName = names[Math.floor(Math.random() * names.length)];

  const randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];

  const randomPrice = prices[Math.floor(Math.random() * prices.length)];

  const obj = {
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice,
  };
  freelancers.push(obj);
  for (let i = 1; i < table.rows.length; ) {
    table.deleteRow(i);
  }
  display();
  // console.log(freelancers);
};
const addJobIntervalId = setInterval(addToArray, 3000);
if (freelancers.length >= maxFreelancers) {
  clearInterval(addJobIntervalId);
}
