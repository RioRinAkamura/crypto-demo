export interface Coin {
  uuid: string;
  name: string;
  symbol: string;
  sparkline: string[];
  tier: number;
  rank: number;
  price: string;
  marketCap: string;
  lowVolume: boolean;
  listedAt: number;
  iconUrl: string;
  color: string;
  coinrankingUrl: string;
  change: string;
  btcPrice: string;
}
