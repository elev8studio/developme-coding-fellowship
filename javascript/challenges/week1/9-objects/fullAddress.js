// Create an object literal that represents an address - use different properties for each part of the address. It should have a fullAddress method, which will return the full address as a nicely formatted string.

let address = {
    street: "1 Made Up Street",
    town: "Bristol",
    postcode: "BS4 8T4",
    fullAddress() {
        return `${this.street}, ${this.town}, ${this.postcode}`;
    },
    fullAddress1() {
        let output = [
            this.street,
            this.town,
            this.postcode,
        ]

        return output.join(", ");
    }
};

console.log(address.postcode); // BS4 8TR
console.log(address.town); // Bristol
console.log(address.fullAddress()); // "1 Made Up Street, Bristol, BS4 8TR"
