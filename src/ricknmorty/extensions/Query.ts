import { REDIRECT, RedirectHelpers } from "gqless";

export const Query = {
  character: {
    [REDIRECT](args: { id: string }, { getByKey }: RedirectHelpers) {
      return getByKey(args.id);
    }
  },
  episode: {
    [REDIRECT](args: { id: string }, { getByKey }: RedirectHelpers) {
      return getByKey(args.id);
    }
  }
};
