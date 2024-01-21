import { Coin } from "./coin-data";

// Live Coin Watch API

export async function coinWatch (coin) {
    try {
        const response = await fetch(new Request("https://api.livecoinwatch.com/coins/single"), {
            method: "POST",
            headers: new Headers({
              "content-type": "application/json",
              "x-api-key": "3b01f704-6ad1-46c9-a083-00bd21a09289",
            }),
            body: JSON.stringify({
              currency: "USD",
              code: coin,
              meta: true
            }),
          });
        const data = await response.json();

        // Create Coin object with API data
        const dataObj = Coin(data.rank, data.png32, data.name, data.rate, data.delta.hour, data.delta.day, data.cap, data.volume, data.totalSupply);
        
        return dataObj;
    } catch (error) {
        console.error(error)
    }
}
