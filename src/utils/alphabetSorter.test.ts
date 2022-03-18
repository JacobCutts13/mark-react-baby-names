import alphabetSorter from "./alphabetSorter";

test("alphabetSorter returns a numer >0 if b before a and <0 a before b ", () => {
  expect(alphabetSorter("Jacob", "Tom")).toBeLessThan(0);
  expect(alphabetSorter("aacob", "Jacob")).toBe(-1);  
});
