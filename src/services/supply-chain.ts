import { httpClient } from './http';

export const getSupplyChainTrail = async (itemId: string) => {
  const response = await httpClient.get(`/supply-chain/items/${itemId}/events`);

  return response.data;
};

export const getLastEvent = async (itemId: string) => {
  const response = await httpClient.get(
    `/supply-chain/items/${itemId}/events/last`
  );

  return response.data;
};
