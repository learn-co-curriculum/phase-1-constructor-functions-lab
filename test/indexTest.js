describe('objects', function() {
  describe('Scooter constructor', function(){
    it("should create a new scooter with three properties", function(){
      let samson = new Scooter(2015, "red", "swoosh");
      expect(samson).to.be.an.instanceof(Scooter);
      expect(samson.year).to.equal(2015);
      expect(samson.color).to.equal("red");
      expect(samson.model).to.equal("swoosh");
    });

  });

  describe('Driver constructor', function(){
    it("should create a new driver with three properties", function(){
      let allison = new Driver("Allison", "16 years", "2 years");
      expect(allison).to.be.an.instanceof(Driver);
      expect(allison.name).to.equal("Allison");
      expect(allison.age).to.equal("16 years");
      expect(allison.experience).to.equal("2 years");
    });
  });

  describe('PickupLocation constructor', function(){
    it("should create a new PickupLocation with two properties", function(){
      let poshHotel = new PickupLocation("123 Broadway", "New York City");
      expect(poshHotel).to.be.an.instanceof(PickupLocation);
      expect(poshHotel.address).to.equal("123 Broadway");
      expect(poshHotel.city).to.equal("New York City");
    });
  });
});
