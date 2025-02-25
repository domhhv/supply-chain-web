import { httpClient } from './http';

export const getItems = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await httpClient.get('/supply-chain/items');

  return response.data;
};

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
