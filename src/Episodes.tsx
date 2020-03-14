import { graphql } from "@gqless/react";
import { Link as RouterLink } from "react-router-dom";
import {
  List,
  ListItem,
  Link,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  ListSubheader
} from "@material-ui/core";
import * as t from "./ricknmorty";
import React from "react";
import { observer } from "mobx-react";

const Episode = observer(
  graphql(({ episode }: { episode: t.Episode }) => {
    return (
      <ListItem
        component={props => (
          <Link
            component={RouterLink}
            to={`/episode/${episode.id}`}
            {...props}
          />
        )}
        button
      >
        <ListItemText
          primary={episode.name}
          secondary={episode.air_date?.format("MMM Do, YYYY")}
        />

        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            onChange={() => (episode.viewed = !episode.viewed)}
            checked={episode.viewed}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  })
);

export const Episodes = graphql(
  ({ episodes, title }: { episodes: (t.Episode | null)[]; title: any }) => {
    return (
      <List subheader={<ListSubheader component="div">{title}</ListSubheader>}>
        {episodes.map(
          episode => episode && <Episode key={episode.id!} episode={episode} />
        )}
      </List>
    );
  }
);
