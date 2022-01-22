export interface AppProps {
  headerText: string;
  extraText?: string;
}

export interface Address {
  street: string;
  number: number;
  postCode: string;
}

// ! using an interface to set the types of the object before using them in the return statement
export interface User {
  id: number;
  name: string;
  age: number;
  country: string;
  address: Address;
  admin: boolean;
}
