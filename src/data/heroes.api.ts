import {
  HomemDeFerro,
  CapitaoAmerica,
  Feiticeira,
  Hulk,
  MulherInvisivel,
  Pantera,
  Wolverine,
  Noturno,
  Blade,
  Cable,
  CapitaMarvel,
  Deadpool,
  Gamora,
  Groot,
  Hercules,
  Namor,
  Rocket,
  SoldadoInvernal,
  Thor,
  Vampira,
  Visao,
  Viuva,
  Demolidor,
  HomemAranha,
  SenhorFantastico,
} from "../images";
import * as uuid from "uuid";

export const HeroesApi = [
  {
    id: uuid.v4(),
    name: "Homem de Ferro",
    image: HomemDeFerro,
    color: "#d63031",
    description:
      "O alter ego do Homem de Ferro é Tony Stark, um rico industrial e inventor genial. Stark se torna o Homem de Ferro depois de ser gravemente ferido e capturado por terroristas. Para salvar sua própria vida e escapar do cativeiro, ele cria uma armadura tecnologicamente avançada que lhe concede habilidades sobre-humanas.",
  },
  {
    id: uuid.v4(),
    name: "Capitão América",
    image: CapitaoAmerica,
    color: "#0984e3",
    description:
      "O alter ego do Capitão América é Steve Rogers, um jovem frágil e patriótico que passa por um experimento de supersoldado durante a Segunda Guerra Mundial. O experimento aprimora seu físico, força e agilidade ao máximo do potencial humano. Com suas novas habilidades, Rogers se torna o Capitão América, um símbolo de liberdade e justiça.",
  },
  {
    id: uuid.v4(),
    name: "Homem Aranha",
    image: HomemAranha,
    color: "#d63031",
    description:
      "O alter ego do Homem-Aranha é Peter Parker, um estudante do ensino médio que ganha habilidades de aranha depois de ser mordido por uma aranha radioativa. Com seus novos poderes, Parker se torna o Homem-Aranha, um vigilante que combate o crime.",
  },
  {
    id: uuid.v4(),
    name: "Feiticeira Escarlate",
    image: Feiticeira,
    color: "#d63031",
    description:
      "O nome verdadeiro da Feiticeira Escarlate é Wanda Maximoff. Ela é uma mutante com a habilidade de manipular a realidade e lançar feitiços poderosos. A Feiticeira Escarlate também tem poderes telepáticos e é altamente versada em magia.",
  },
  {
    id: uuid.v4(),
    name: "Hulk",
    image: Hulk,
    color: "#00b894",
    description:
      "O alter ego do Hulk é o Dr. Bruce Banner, um cientista brilhante que foi exposto a uma explosão de raios gama. Como resultado desse acidente, Banner se transforma em um ser poderoso e descontrolado sempre que sua raiva é desencadeada. O Hulk é uma manifestação da personalidade selvagem e impulsiva de Banner.",
  },
  {
    id: uuid.v4(),
    name: "Pantera Negra",
    image: Pantera,
    color: "#2d3436",
    description:
      "Pantera Negra é um personagem super-herói do universo Marvel Comics. Criado pelo escritor Stan Lee e pelo desenhista Jack Kirby, o Pantera Negra fez sua primeira aparição em Quarteto Fantástico # 52 em 1966. O personagem foi o primeiro super-herói negro nos quadrinhos americanos convencionais.",
  },
  {
    id: uuid.v4(),
    name: "Wolverine",
    image: Wolverine,
    color: "#fdcb6e",
    description:
      "Nascido com sentidos sobre-humanos e o poder de curar quase qualquer ferimento, Wolverine foi capturado por uma organização secreta canadense e recebeu um esqueleto e garras inquebráveis. Tratado como um animal, levou anos para se controlar. Agora, ele é um membro de destaque dos X-Men e dos Vingadores.",
  },
  {
    id: uuid.v4(),
    name: "Deadpool",
    image: Deadpool,
    color: "#d63031",
    description:
      "O nome verdadeiro de Deadpool é Wade Wilson, um mercenário que adquiriu poderes de cura acelerada devido a um experimento. Esses poderes o permitem se regenerar rapidamente de ferimentos e até mesmo regenerar membros perdidos. No entanto, o processo de cura acelerada também o deixou com uma aparência desfigurada.",
  },
  {
    id: uuid.v4(),
    name: "Noturno",
    image: Noturno,
    color: "#6c5ce7",
    description:
      "O nome verdadeiro do Noturno é Kurt Wagner. Ele é um mutante com características físicas distintas, incluindo pele azul, olhos amarelos e uma cauda preênsil. O Noturno também possui habilidades únicas, como agilidade sobre-humana, reflexos rápidos e a capacidade de se teleportar através de um ambiente tridimensional conhecido como 'Bamf' .",
  },
  {
    id: uuid.v4(),
    name: "Blade",
    image: Blade,
    color: "#2d3436",
    description:
      "Blade nasceu Eric Brooks no Soho, Londres, Inglaterra, filho de mãe humana e pai vampiro. Quando ainda era criança, sua mãe foi morta por Deacon Frost, um poderoso vampiro. Brooks foi mordido por Frost durante o ataque, mas não se transformou totalmente em vampiro. Em vez disso, ele se tornou um dhampir, um híbrido meio-humano/meio-vampiro.",
  },
  {
    id: uuid.v4(),
    name: "Cable",
    image: Cable,
    color: "#0984e3",
    description:
      "Cable é um mutante poderoso com uma ampla gama de habilidades. Ele é um telepata e telecinético, e também pode usar seus poderes psiônicos para criar campos de força e projetar rajadas de energia. Ele também é um habilidoso combatente corpo a corpo e um especialista no uso de armas de fogo.",
  },
  {
    id: uuid.v4(),
    name: "Capitã Marvel",
    image: CapitaMarvel,
    color: "#d63031",
    description:
      "Danvers é uma ex-oficial da Força Aérea dos Estados Unidos que ganhou força sobre-humana, projeção de energia e voo após ser exposto à energia do Kree Psyche-Magnitron. Desde então, ela se tornou uma das super-heroínas mais poderosas do Universo Marvel e serviu como membro dos Vingadores, dos Guardiões da Galáxia e da Tropa Alfa.",
  },
  {
    id: uuid.v4(),
    name: "Gamora",
    image: Gamora,
    color: "#55efc4",
    description:
      "Gamora é a última de sua espécie, a Zen-Whoberis, que foi exterminada pelos Badoon. Thanos a encontrou quando criança e decidiu usá-la como arma. Gamora foi criada e treinada por Thanos para assassinar o Magus, a versão maligna e futura de Adam Warlock. Thanos demonstrou pouca gentileza durante sua infância, mas Gamora foi muito leal ao homem que lhe prometeu a oportunidade de vingar a morte de sua família.",
  },
  {
    id: uuid.v4(),
    name: "Groot",
    image: Groot,
    color: "#fdcb6e",
    description:
      "Groot é uma criatura senciente semelhante a uma árvore do Planeta X, a capital dos mundos ramificados. Os colossos Flora são seres parecidos com árvores cuja linguagem é quase impossível de entender devido à rigidez de suas laringes, fazendo com que sua fala soe como se estivessem repetindo a frase 'Eu sou Groot'. Outros seres tentam ser amigáveis",
  },
  {
    id: uuid.v4(),
    name: "Hercules",
    image: Hercules,
    color: "#e17055",
    description:
      "Hércules é filho de Zeus, o rei dos deuses, e Alcmena, uma mulher mortal. Ele nasceu com força e habilidades sobre-humanas e foi treinado pelo centauro Quíron. Desde então, Hércules se tornou um dos super-heróis mais poderosos do Universo Marvel e atuou como membro dos Vingadores, dos Campeões, dos Heróis de Aluguel e até dos Guardiões da Galáxia.",
  },
  {
    id: uuid.v4(),
    name: "Rocket",
    image: Rocket,
    color: "#fdcb6e",
    description:
      "Rocket é um guaxinim antropomórfico geneticamente modificado, especialista em armas e táticas de combate. Ele é um piloto habilidoso e um estrategista astuto. Rocket possui uma personalidade sarcástica e impulsiva, sendo conhecido por seu humor ácido e sua atitude irônica.",
  },
  {
    id: uuid.v4(),
    name: "Soldado Invernal",
    image: SoldadoInvernal,
    color: "#b2bec3",
    description:
      "O Soldado Invernal é uma figura complexa e multifacetada. Inicialmente, ele era conhecido como Bucky Barnes, o parceiro mirim do Capitão América durante a Segunda Guerra Mundial. No entanto, após um confronto fatal com o vilão Barão Zemo, Bucky foi presumido morto e acabou sendo resgatado e transformado em uma arma pela organização russa conhecida como Hydra.",
  },
  {
    id: uuid.v4(),
    name: "Namor",
    image: Namor,
    color: "#0984e3",
    description:
      "Namor é um híbrido entre humano e atlante, a civilização submarina. Ele é o herdeiro do trono de Atlântida e possui uma série de habilidades aquáticas, incluindo a capacidade de respirar debaixo d'água, nadar em velocidades extremas e comunicar-se com criaturas marinhas.",
  },
  {
    id: uuid.v4(),
    name: "Viuva Negra",
    image: Viuva,
    color: "#2d3436",
    description:
      "O nome verdadeiro da Viúva Negra é Natasha Romanoff. Ela é uma espiã altamente treinada e uma especialista em combate corpo a corpo. Natasha é conhecida por sua destreza em artes marciais, sua habilidade de acrobacia e seu arsenal de armas e equipamentos de espionagem.",
  },
  {
    id: uuid.v4(),
    name: "Visão",
    image: Visao,
    color: "#00b894",
    description:
      "A Visão é um androide sintético com uma aparência humana. Ele foi criado pelo robô vilão Ultron, mas acabou se voltando contra seu criador e se tornando um herói. A Visão possui habilidades sobre-humanas, incluindo força, velocidade e durabilidade aumentadas. Além disso, ele pode voar e possui a capacidade de emitir rajadas de energia através de uma joia em sua testa chamada de Gema da Mente.",
  },
  {
    id: uuid.v4(),
    name: "Vampira",
    image: Vampira,
    color: "#00b894",
    description:
      "O nome verdadeiro da Vampira é Anna Marie, embora seja mais conhecida pelo codinome Vampira. Seu poder mutante permite que ela absorva a energia vital, as memórias e os poderes de outras pessoas através do toque físico. Essa habilidade a faz se assemelhar a um vampiro, pois ela pode drenar temporariamente a força vital de outros seres.",
  },
  {
    id: uuid.v4(),
    name: "Demolidor",
    image: Demolidor,
    color: "#d63031",
    description:
      "O nome verdadeiro do Demolidor é Matthew Murdock. Ele é um advogado cego que, após um acidente envolvendo produtos químicos radioativos, desenvolveu sentidos aguçados e habilidades físicas aprimoradas. Embora seja cego, Murdock pode por meio de seus outros sentidos aprimorados, o que o torna um lutador excepcionalmente habilidoso e um combatente contra o crime formidável.",
  },
  {
    id: uuid.v4(),
    name: "Senhor Fantastico",
    image: SenhorFantastico,
    color: "#0984e3",
    description:
      "O nome verdadeiro do Sr. Fantástico é Reed Richards. Ele é um cientista brilhante e líder intelectual da equipe. Sua principal habilidade é a capacidade de esticar e deformar seu corpo em comprimentos e formas diferentes, graças a uma exposição a raios cósmicos durante uma missão espacial.",
  },
  {
    id: uuid.v4(),
    name: "Mulher Invisivel",
    image: MulherInvisivel,
    color: "#0984e3",
    description:
      "O nome verdadeiro da Mulher Invisível é Susan Storm Richards, também conhecida como Sue Storm. Ela é uma mutante com a habilidade de se tornar completamente invisível, bem como de criar campos de força invisíveis que podem proteger a si mesma e aos outros.",
  },
  {
    id: uuid.v4(),
    name: "Thor",
    image: Thor,
    color: "#fdcb6e",
    description:
      "Thor é um poderoso deus asgardiano, baseado na mitologia nórdica. Seu nome verdadeiro é Thor Odinson, e ele é o filho de Odin, o rei de Asgard. Thor possui uma força sobre-humana, resistência e longevidade. Ele também empunha o martelo místico Mjolnir, que lhe confere a capacidade de controlar trovões e relâmpagos, voar e canalizar poderes divinos.",
  },
];
