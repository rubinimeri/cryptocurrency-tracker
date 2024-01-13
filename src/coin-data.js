// Create Coin objects

export function Coin(rank, name, price, hour, day, marketCap, volume, circulatingSupply) {
    // Adjust data
    price = price.toFixed(2);
    hour = ((hour - 1) * 100).toFixed(2);
    day = ((day - 1) * 100).toFixed(2);

    return { rank, name, price, hour, day, marketCap, volume, circulatingSupply }
} 

// Array of Coin objects

export let coins = [];