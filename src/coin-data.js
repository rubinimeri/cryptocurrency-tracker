// * Create counter for Coin objects
let coinCounter = 1;

// Create Coin objects

export function Coin(rank, logo, name, price, hour, day, marketCap, volume, circulatingSupply) {
    rank = coinCounter;

    // * Increment counter
    coinCounter++;

    // Adjust data
    price = price.toFixed(2);
    hour = ((hour - 1) * 100).toFixed(2);
    day = ((day - 1) * 100).toFixed(2);

    return { rank, logo, name, price, hour, day, marketCap, volume, circulatingSupply }
} 

// Array of Coin objects

export let coins = [];