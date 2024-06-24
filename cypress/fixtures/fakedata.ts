import { faker } from "@faker-js/faker";

const Name: string = faker.person.firstName();
const Surname: string = faker.person.lastName();
const Email: string = faker.internet.email();
const Password: string = faker.internet.password();
const Street: string = faker.location.streetAddress();
const PostCode: string = faker.location.zipCode();
const City: string = faker.location.city();
const Login: string = Surname + Password;

export const fakeData = {
  Name,
  Surname,
  Email,
  Password,
  Street,
  PostCode,
  City,
  Login,
};
