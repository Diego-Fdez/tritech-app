export interface UserInterface {
  id: string;
  fullName: string;
  email: string;
  password?: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  country: string;
  isActive: boolean;
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
  country?: string;
  isActive?: boolean;
}
