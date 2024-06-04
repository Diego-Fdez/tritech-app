export interface UserInterface {
  id: string;
  fullName: string;
  email: string;
  password?: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  web?: string;
  country: string;
  phone: string;
}

export interface UserResponseInterface {
  data: UserInterface;
  message: string;
  statusCode: number;
}

export interface UserUpdateInformation {
  fullName?: string;
  email?: string;
  password?: string;
  role?: string;
  web?: string;
  country?: string;
  phone?: string;
}
