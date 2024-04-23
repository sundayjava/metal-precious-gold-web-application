export type User = {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    address: string;
    street: string;
    streetNumber: string;
    door: string;
    postalcode: string;
    city: string;
    country: string;
  };

  export type User2 = {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber?: string | null;
    address?: string | null;
    street?: string | null;
    streetNumber?: string | null;
    door?: string | null;
    postalcode?: string | null;
    city?: string | null;
    country?: string | null;
    };