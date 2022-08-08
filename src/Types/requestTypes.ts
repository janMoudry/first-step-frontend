export interface Login {
  shouldLogin: boolean;
  phoneId: boolean;
  token: string;
}

export interface EditProfile {
  phoneId: string;
  name: string;
  midllename: string;
  surname: string;
  birth: string;
  description: string;
  hobbies: Array<string>;
}

