import * as React from "react";
import { graphql } from "@gqless/react";
import { Episode } from "./Episode";
import { query } from "./ricknmorty";
import { Router, Route, Switch, useHistory } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { Character } from "./Character";
import styled from "@emotion/styled";

const EpisodeName = styled(Link)``;

const StyledEpisodes = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Episodes = graphql(() => {
  return (
    <StyledEpisodes>
      {query.episodes()?.results?.map(
        episode =>
          episode && (
            <EpisodeName to={`/episode/${episode.id}`} key={episode.id!}>
              {episode.name}
            </EpisodeName>
          )
      )}
    </StyledEpisodes>
  );
});

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <React.Suspense fallback="loading">
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
            <Episodes />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
};
