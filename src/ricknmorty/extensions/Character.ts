import { GET_KEY, REDIRECT, RedirectHelpers } from "gqless";
import { observable } from "mobx";

class CharacterExtension {
  constructor(private data: any) {}
  @observable following = false;

  get primary() {
    return this.data.id <= 5;
  }

  [GET_KEY] = (char: any) => char.id;
}

export const Character = (char: any) => new CharacterExtension(char);
