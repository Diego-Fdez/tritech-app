import { ClientsInterface } from '../interfaces';

export const clientsAdapter = (clientData: ClientsInterface[]) => {
  return clientData?.map((client: ClientsInterface) => ({
    id: client.id,
    clientName: client.clientName,
    country: client.country,
    createdAt: client.createdAt,
    updatedAt: client.updatedAt,
  }));
};
