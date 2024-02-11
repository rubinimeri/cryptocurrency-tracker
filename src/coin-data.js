// Create Coin objects

export function Coin(
  rank,
  logo,
  name,
  price,
  hour,
  day,
  marketCap,
  volume,
  circulatingSupply,
  liquidity,
  week,
  month,
  quarter,
  year,
) {
  return {
    rank,
    logo,
    name,
    price: price.toFixed(2),
    hour: ((hour - 1) * 100).toFixed(2),
    day: ((day - 1) * 100).toFixed(2),
    marketCap,
    volume,
    circulatingSupply,
    liquidity,
    week: ((week - 1) * 100).toFixed(2),
    month: ((month - 1) * 100).toFixed(2),
    quarter: ((quarter - 1) * 100).toFixed(2),
    year: ((year - 1) * 100).toFixed(2),
  };
}

// Array of Coin objects

export const coins = [];
