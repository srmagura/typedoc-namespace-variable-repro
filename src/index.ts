// === THIS WORKS ===
//
// function email(value: string): boolean {
//   return true;
// }
//
// export const Validators = {
//   email,
// };

// === THIS WARNS BECAUSE EMAIL IS NOT INCLUDED IN THE DOCUMENTATION ===
//
// type Email = (value: string) => boolean;
//
// export type Validators = {
//   email: Email;
// };

// === THIS INCORRECTLY SHOWS VALIDATORS HAVING TYPE { email: any } ===

export type Validators = {
  email: (value: string) => boolean;
};
