import md5 from "md5";
import {
  ContainerContent,
  ContainerContentMiddle,
  CardContainer,
  ContainerThumb,
  ContainerContentNavigation,
  ListPagination,
  ContainerContentMiddleNavigation,
} from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { HeroesApi } from "../../data/heroes.api";

interface MarvelProps {
  id: number;
  name?: string;
  resourceURI?: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

export function Content() {
  const [marvels, setMarvels] = useState<any[]>([]);
  // const publicKey = "d3d4c96332c02914ba460ab51662f742";
  // const privateKey = "6c83ae9bd2fe030d9e89c6047a55074b6abd9360";
  // const hash = md5(1 + privateKey + publicKey);

  useEffect(() => {
    handleHeroes();
    // const url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`;
    // function handleMarvelHeroes() {
    //   axios.get(url).then((response) => setMarvels(response.data.data.results));
    // }
    // handleMarvelHeroes();
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
              <h3>{marvel.name}</h3>
              <p>{marvel.description}</p>
            </CardContainer>
          );
        })}
      </ContainerContentMiddle>
      {/* <ContainerContentMiddleNavigation>
        <ContainerContentNavigation>
          <ListPagination>
            <li>
              <a href="sshsh">Página Inicial</a>
            </li>
            <li>
              <a href="sshsh">1</a>
            </li>
            <li>
              <a href="sshsh">2</a>
            </li>
            <li>
              <a href="sshsh">3</a>
            </li>

            <li>
              <a href="sshsh">Página Final</a>
            </li>
          </ListPagination>
        </ContainerContentNavigation>
      </ContainerContentMiddleNavigation> */}
    </ContainerContent>
  );
}
