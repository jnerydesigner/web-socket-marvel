import {
  ContainerContent,
  ContainerContentMiddle,
  CardContainer,
  ContainerThumb,
} from "./styles";

import { useContext, useEffect, useState } from "react";
import { HeroesApi } from "../../data/heroes.api";
import { ThemeContext } from "../../context";

// interface MarvelProps {
//   id: number;
//   name?: string;
//   resourceURI?: string;
//   thumbnail: {
//     extension: string;
//     path: string;
//   };
// }

export function Content() {
  const [marvels, setMarvels] = useState<any[]>([]);
  const { likedWeb } = useContext(ThemeContext);
  useEffect(() => {
    handleHeroes();
  });

  const handleHeroes = () => {
    setMarvels(HeroesApi);
  };
  return (
    <ContainerContent>
      <ContainerContentMiddle>
        {marvels.map((marvel) => {
          return (
            <CardContainer key={marvel.id}>
              <ContainerThumb>
                <img src={`${marvel.image}`} alt="" />
              </ContainerThumb>
              <h3>
                {marvel.name} {likedWeb}
              </h3>
              <p>
                {marvel.description} {likedWeb}
              </p>
              {/* <BtnLikedContainer>
                <Like idHero={marvel.id} />
              </BtnLikedContainer> */}
            </CardContainer>
          );
        })}
      </ContainerContentMiddle>
    </ContainerContent>
  );
}
