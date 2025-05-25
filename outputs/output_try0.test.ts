import {
  greetUser,
  filterHobbies,
  fetchMockData,
  processData,
  updateDOM
} from './output_try0';

// Mock DOM for updateDOM
document.body.innerHTML = `<div id="output"></div>`;

describe("greetUser", () => {
  it("should log the correct greeting", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    greetUser({ name: "Bob", age: 30, hobbies: [] });
    expect(spy).toHaveBeenCalledWith("Hello, Bob! You're 30 years old.");
    spy.mockRestore();
  });
});

describe("filterHobbies", () => {
  it("should filter hobbies starting with 'c'", () => {
    const hobbies = ["coding", "reading", "cycling", "gaming"];
    const result = filterHobbies(hobbies);
    expect(result).toEqual(["coding", "cycling"]);
  });
});

describe("fetchMockData", () => {
  it("should return mock data with status success", async () => {
    const result = await fetchMockData();
    expect(result.status).toBe("success");
    expect(result.data).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("processData", () => {
  it("should return squared values of data", async () => {
    const result = await processData();
    expect(result).toEqual([1, 4, 9, 16, 25]);
  });
});

describe("updateDOM", () => {
  it("should update #output element with the message", () => {
    updateDOM("Hello world!");
    const el = document.getElementById("output");
    expect(el?.innerText).toBe("Hello world!");
  });
});
