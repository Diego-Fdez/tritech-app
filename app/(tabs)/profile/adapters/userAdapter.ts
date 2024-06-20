import { UserInterface } from '../interfaces';

export const userInformationAdapter = (
  userData: UserInterface
): UserInterface => {
  return {
    id: userData?.id,
    fullName: userData?.fullName,
    email: userData?.email,
    role: userData?.role,
    createdAt: userData?.createdAt,
    updatedAt: userData?.updatedAt,
    country: userData?.country,
    isActive: userData?.isActive,
  };
};
