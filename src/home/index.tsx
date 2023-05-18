import { Content } from "../components/content";
import { Header } from "../components/header";
import { ContainerHome } from "./styles";

interface PropsTheme {
  onChangeTheme: () => void;
}

export function Home({ onChangeTheme }: PropsTheme) {
  return (
    <ContainerHome>
      <Header onChangeTheme={onChangeTheme} />
      <Content />
    </ContainerHome>
  );
}
