import { observable } from "mobx";
import { GET_KEY } from "gqless";
import moment from "moment";

class EpisodeExtension {
  [GET_KEY] = (episode: any) => episode.id;

  @observable viewed = false;

  air_date(date: string) {
    return moment(date);
  }
}

export const Episode = () => new EpisodeExtension();
