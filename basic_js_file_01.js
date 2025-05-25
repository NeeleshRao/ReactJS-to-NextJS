const user = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "coding", "cycling"]
};

function greetUser(user) {
  console.log(`Hello, ${user.name}! You're ${user.age} years old.`);
}

function filterHobbies(hobbies) {
  return hobbies.filter(hobby => hobby.startsWith("c"));
}

async function fetchMockData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ status: "success", data: [1, 2, 3, 4, 5] });
    }, 1000);
  });
}

async function processData() {
  const result = await fetchMockData();
  if (result.status === "success") {
    const squares = result.data.map(x => x * x);
    console.log("Processed data (squares):", squares);
    return squares;
  }
}

function updateDOM(message) {
  const el = document.getElementById("output");
  if (el) el.innerText = message;
}

async function main() {
  greetUser(user);
  const filtered = filterHobbies(user.hobbies);
  console.log("Filtered hobbies:", filtered);

  const processed = await processData();
  updateDOM(`Done! Squares: ${processed.join(", ")}`);
}

main();

export {}
