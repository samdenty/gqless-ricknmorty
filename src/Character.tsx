import * as React from "react";
import * as g from "./ricknmorty";
import styled from "@emotion/styled";
import { graphql } from "@gqless/react";

const StyledCharacter = styled.div``;

const CharacterImg = styled.img`
  border-radius: 50%;
  height: 10em;
`;

export const Character = graphql(
  ({ character }: { character: g.Character }) => {
    return (
      <StyledCharacter>
        <CharacterImg src={character.image!} />
        {character.name}
      </StyledCharacter>
    );
  }
);
