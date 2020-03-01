// Create a class that represents an address - use different properties for each part of the address. It should have a fullAddress method, which will return the full address as a nicely formatted string.

class Address {
    constructor(street, postcode, town) {
        this.street = street;
        this.town = town;
        this.postcode = postcode;
    }

    fullAddress() {
        return `${this.street}, ${this.town}, ${this.postcode}`;
    }
}

let address = new Address("1 Made Up Street", "BS4 8TR", "Bristol");

console.log(
    address.postcode, // BS4 8TR
    address.town, // Bristol
    address.fullAddress(), // "1 Made Up Street, Bristol, BS4 8TR"
);
