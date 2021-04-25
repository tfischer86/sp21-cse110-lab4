let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

for (const property in statistics) {
    // there seems to be some debate on whether (num % 2) or (num & 1) is better...
    // Apparently (num & 1) can be slower because it converts from Number (floating-point) to 32-bit integer representation
    if (property[0] == 'r' || (statistics[property] % 2) == 1) {
        console.log(`statistics['${property}']: ${statistics[property]}`);
    }
}
