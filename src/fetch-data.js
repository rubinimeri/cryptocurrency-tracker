import { Coin } from './coin-data';
import { addCoins } from './display-controller';

// Live Coin Watch API

export async function coinWatch(coin, currency) {
  try {
    const response = await fetch(new Request('https://api.livecoinwatch.com/coins/single'), {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json',
        'x-api-key': '3b01f704-6ad1-46c9-a083-00bd21a09289',
      }),
      body: JSON.stringify({
        currency,
        code: coin,
        meta: true,
      }),
    });
    const data = await response.json();

    // Create Coin object with API data
    const dataObj = Coin(
      data.rank,
      data.png32,
      data.name,
      data.rate,
      data.delta.hour,
      data.delta.day,
      data.cap,
      data.volume,
      data.totalSupply,
      data.liquidity,
      data.delta.week,
      data.delta.month,
      data.delta.quarter,
      data.delta.year,
    );

    return dataObj;
  } catch (error) {
    return error;
  }
}

// * Top 10 coins by market cap API
export async function trendingCoins() {
  try {
    const response = await fetch(new Request('https://api.livecoinwatch.com/coins/list'), {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json',
        'x-api-key': '3b01f704-6ad1-46c9-a083-00bd21a09289',
      }),
      body: JSON.stringify({
        currency: 'USD',
        sort: 'rank',
        order: 'ascending',
        offset: 0,
        limit: 10,
        meta: true,
      }),
    });
    const data = response.json();
    return addCoins(data);
  } catch (error) {
    return error;
  }
}

/*
 * Get historical data for chart from CoinGecko API
 */
export async function historicalData(coin, currency, days) {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coin || 'bitcoin'}/market_chart?vs_currency=${currency || 'usd'}&days=${days || '360'}`,
  );
  const data = await response.json();

  return data.prices;
}
