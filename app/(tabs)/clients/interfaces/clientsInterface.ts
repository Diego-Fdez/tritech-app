export interface ClientsInterface {
  id: string;
  clientName: string;
  country: string;
  createdAt: string;
  updatedAt: string;
}

export interface ClientsResponseInterface {
  data: ClientsInterface[];
  message: string;
  statusCode: number;
}
