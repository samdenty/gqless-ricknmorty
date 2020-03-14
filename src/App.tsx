import * as React from "react";
import { graphql } from "@gqless/react";
import { Episode } from "./Episode";
import { query } from "./ricknmorty";
import { Switch, Route } from "react-router-dom";
import { Character } from "./Character";
import { Episodes } from "./Episodes";

export const App = graphql(() => {
  return (
    <Switch>
      <Route path="/character/:id">
        {({ match }) => {
          const character = query.character({
            id: match?.params.id
          });

          return character && <Character character={character} />;
        }}
      </Route>
      <Route path="/episode/:id">
        {({ match }) => {
          const episode = query.episode({
            id: match?.params.id
          });

          return episode && <Episode episode={episode} />;
        }}
      </Route>
      <Route>
        {() => {
          const episodes = query.episodes()?.results;
          return (
            episodes && <Episodes title="All episodes" episodes={episodes} />
          );
        }}
      </Route>
    </Switch>
  );
});
