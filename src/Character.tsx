import { Avatar } from "@material-ui/core";
import { observer } from "mobx-react";
import * as React from "react";
import * as g from "./ricknmorty";
import styled from "@emotion/styled";
import { graphql } from "@gqless/react";
import { Episodes } from "./Episodes";

const StyledCharacter = styled.div``;

const Content = graphql(({ character }: { character: g.Character }) => {
  return (
    <>
      {character.location?.name}
      {character.episode && (
        <Episodes title="Appears in" episodes={character.episode} />
      )}
    </>
  );
});

export const Character = observer(
  graphql(({ character }: { character: g.Character }) => {
    return (
      <StyledCharacter>
        <Avatar src={character.image!} />
        {character.name}
        <button
          onClick={() => {
            character.following = !character.following;
          }}
        >
          {character.following ? "Unfollow" : "Follow"}
        </button>
        <React.Suspense fallback="loading location">
          <Content character={character} />
        </React.Suspense>
      </StyledCharacter>
    );
  })
);
