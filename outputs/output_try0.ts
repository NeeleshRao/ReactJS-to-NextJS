export const user = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "coding", "cycling"]
};

export function greetUser(user: {name: string, age: number, hobbies: string[]}) {
    console.log(`Hello, ${user.name}! You're ${user.age} years old.`);
}

export function filterHobbies(hobbies: string[]): string[] {
    return hobbies.filter(hobby => hobby.startsWith("c"));
}

export async function fetchMockData(): Promise<{status: string, data: number[]}> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ status: "success", data: [1, 2, 3, 4, 5] });
        }, 1000);
    });
}

export async function processData(): Promise<number[]> {
    const result = await fetchMockData();
    if (result.status === "success") {
        const squares = result.data.map(x => x * x);
        console.log("Processed data (squares):", squares);
        return squares;
    }
    return [];
}

export function updateDOM(message: string) {
    const el = document.getElementById("output");
    if (el) el.innerText = message;
}

export async function main() {
    greetUser(user);
    const filtered = filterHobbies(user.hobbies);
    console.log("Filtered hobbies:", filtered);

    const processed = await processData();
    updateDOM(`Done! Squares: ${processed.join(", ")}`);
}

main();
