function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}
function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}
function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}
// Creating Scooter instances
const scooter1 = new Scooter(2023, "Red", "Model X");
const scooter2 = new Scooter(2022, "Blue", "Model Y");

// Creating Driver instances
const driver1 = new Driver("Alice", 30, 5);
const driver2 = new Driver("Bob", 25, 3);

// Creating PickupLocation instances
const location1 = new PickupLocation("123 Main St", "New York");
const location2 = new PickupLocation("456 Elm St", "Los Angeles");
