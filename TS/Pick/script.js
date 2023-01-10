var bob = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
console.log(bob);
var bob2 = {
    name: "Bob",
    age: 20,
    location: "Dhanmondi"
};
console.log(bob2);
