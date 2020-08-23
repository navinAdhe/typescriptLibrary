export function greet(name: string) {
  return "HI " + name;
}

export function getAuthorContactInfo() {
  return new AuthorInfo("Navin", "Adhe");
}

export function getModuleName(modNo: number) {
  switch (modNo) {
    case 1:
      return "Intro to course";
    case 2:
      return "Declaration file fundamentals";
    case 3:
      return "Building declaration files";
    case 4:
      return "Publish own library";
    default:
      return "No such module exits";
  }
}

export class AuthorInfo {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
