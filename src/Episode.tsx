import * as React from "react";
import { Link } from "react-router-dom";
import * as t from "./ricknmorty";
import styled from "@emotion/styled";
import { graphql } from "@gqless/react";
import { GridListTile, GridList } from "@material-ui/core";

const StyledEpisode = styled.div`
  display: flex;
  flex-direction: column;
`;

const AirDate = styled.div``;

const Character = graphql(({ character }: { character: t.Character }) => {
  return (
    <GridListTile
      cols={1}
      component={(props: any) => (
        <Link to={`/character/${character.id}`} {...props} />
      )}
      style={{
        height: 150,
        width: character.primary ? 200 : 100
      }}
    >
      <img src={character.image!} alt={character.name || undefined} />
    </GridListTile>
  );
});

const EpisodeContent = graphql(({ episode }: { episode: t.Episode }) => {
  return (
    <>
      <GridList cols={3}>
        {episode.characters?.map(
          character =>
            character && <Character key={character.id!} character={character} />
        )}
      </GridList>
    </>
  );
});

export const Episode = graphql(({ episode }: { episode: t.Episode }) => {
  return (
    <StyledEpisode>
      {episode.name}
      <AirDate>{episode.air_date?.fromNow()}</AirDate>
      <React.Suspense fallback="loading content">
        <EpisodeContent episode={episode} />
      </React.Suspense>
    </StyledEpisode>
  );
});
