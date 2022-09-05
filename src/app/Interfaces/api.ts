export interface Address {
  street: string;
  city: string;
}

export interface IUser {
  id?: number;
  name: string;
  email: string;
  address: Address;
  phone: string;
}
