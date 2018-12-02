export const typeDefs = ["type Query {\n  sayBye: String!\n  sayHello(name: String!): SayHelloResponse!\n  user: User\n}\n\ntype SayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype Place {\n  id: Int!\n  name: String!\n  lat: Float!\n  log: Float!\n  address: String!\n  isFav: Boolean!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype User {\n  id: Int!\n  firstName: String!\n  lastName: String!\n  age: Int\n  password: String\n  email: String\n  verifiedEmail: Boolean!\n  phoneNumber: String\n  verifiedPhoneNumber: Boolean!\n  profilePhoto: String\n  fullName: String\n  idDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float\n  lastLat: Float\n  lastOrientation: Float\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHello: SayHelloResponse;
  user: User | null;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface SayHelloResponse {
  text: string;
  error: boolean;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number | null;
  password: string | null;
  email: string | null;
  verifiedEmail: boolean;
  phoneNumber: string | null;
  verifiedPhoneNumber: boolean;
  profilePhoto: string | null;
  fullName: string | null;
  idDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  lastLng: number | null;
  lastLat: number | null;
  lastOrientation: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface Place {
  id: number;
  name: string;
  lat: number;
  log: number;
  address: string;
  isFav: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  used: boolean;
  createdAt: string;
  updatedAt: string | null;
}
