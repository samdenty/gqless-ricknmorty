import * as React from "react";
import * as g from "./ricknmorty";
import styled from "@emotion/styled";
import { graphql } from "@gqless/react";
import { Link } from "react-router-dom";
import moment from "moment";

const CharacterImg = styled.img`
  border-radius: 50%;
  height: 1em;
`;

const StyledEpisode = styled.div`
  display: flex;
  flex-direction: column;
`;

const Characters = styled.div`
  display: flex;
  flex-direction: column;
`;

const AirDate = styled.div``;

const StyledCharacter = styled(Link)``;

const Character = graphql(({ character }: { character: g.Character }) => {
  return (
    <StyledCharacter to={`/character/${character.id}`}>
      <CharacterImg src={character.image!} />
      {character.name}
    </StyledCharacter>
  );
});

export const Episode = graphql(({ episode }: { episode: g.Episode }) => {
  return (
    <StyledEpisode>
      {episode.name}
      <AirDate>{episode.air_date?.fromNow()}</AirDate>
      <Characters>
        {episode.characters?.map(
          character =>
            character && <Character key={character.id!} character={character} />
        )}
      </Characters>
    </StyledEpisode>
  );
});
