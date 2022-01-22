type Division = 'Serie A' | 'Serie B'
type Team = {
    name: string,
    state: string,
    division: Division,
    image: string
}

const data: Team[] = [
    {name: 'América-MG', state: 'MG', division: 'Serie A', image: 'america-mg.svg'},
    {name: 'Athletico-PR', state: 'PR', division: 'Serie A', image: 'athletico.svg'},
    {name: 'Atlético-GO', state: 'GO', division: 'Serie A', image: 'atletico-go.svg'},
    {name: 'Atlético-MG', state: 'MG', division: 'Serie A', image: 'atletico-mg.svg'},
    {name: 'Avaí', state: 'SC', division: 'Serie A', image: 'avai.svg'},
    {name: 'Botafogo', state: 'RJ', division: 'Serie A', image: 'botafogo.svg'},
    {name: 'RB Bragantino', state: 'SP', division: 'Serie A', image: 'bragantino.svg'},
    {name: 'Ceará', state: 'CE', division: 'Serie A', image: 'ceara.svg'},
    {name: 'Corinthians', state: 'SP', division: 'Serie A', image: 'corinthians.svg'},
    {name: 'Coritiba', state: 'PR', division: 'Serie A', image: 'coritiba.svg'},
    {name: 'Cuiabá', state: 'MT', division: 'Serie A', image: 'cuiaba.svg'},
    {name: 'Flamengo', state: 'RJ', division: 'Serie A', image: 'flamengo.svg'},
    {name: 'Fluminense', state: 'RJ', division: 'Serie A', image: 'fluminense.svg'},
    {name: 'Fortaleza', state: 'CE', division: 'Serie A', image: 'fortaleza.svg'},
    {name: 'Goiás', state: 'GO', division: 'Serie A', image: 'goias.svg'},
    {name: 'Internacional', state: 'RS', division: 'Serie A', image: 'internacional.svg'},
    {name: 'Juventude', state: 'RS', division: 'Serie A', image: 'juventude.svg'},
    {name: 'Palmeiras', state: 'SP', division: 'Serie A', image: 'palmeiras.svg'},
    {name: 'Santos', state: 'SP', division: 'Serie A', image: 'santos.svg'},
    {name: 'São Paulo', state: 'SP', division: 'Serie A', image: 'sao-paulo.svg'},
    {name: 'Bahia', state: 'BA', division: 'Serie B', image: 'bahia.svg'},
    {name: 'Brusque', state: 'SC', division: 'Serie B', image: 'brusque.svg'},
    {name: 'Chapecoense', state: 'SC', division: 'Serie B', image: 'chapecoense.svg'},
    {name: 'CRB', state: 'AL', division: 'Serie B', image: 'crb.svg'},
    {name: 'Criciúma', state: 'SC', division: 'Serie B', image: 'criciuma.svg'},
    {name: 'Cruzeiro', state: 'MG', division: 'Serie B', image: 'cruzeiro.svg'},
    {name: 'CSA', state: 'AL', division: 'Serie B', image: 'csa.svg'},
    {name: 'Grêmio', state: 'RS', division: 'Serie B', image: 'gremio.svg'},
    {name: 'Guarani', state: 'SP', division: 'Serie B', image: 'guarani.svg'},
    {name: 'Ituano', state: 'SP', division: 'Serie B', image: 'ituano.svg'},
    {name: 'Londrina', state: 'PR', division: 'Serie B', image: 'londrina.svg'},
    {name: 'Náutico', state: 'PE', division: 'Serie B', image: 'nautico.svg'},
    {name: 'Novohorizontino', state: 'SP', division: 'Serie B', image: 'novohorizontino.svg'},
    {name: 'Operário-PR', state: 'PR', division: 'Serie B', image: 'operario.svg'},
    {name: 'Ponte Preta', state: 'SP', division: 'Serie B', image: 'ponte-preta.svg'},
    {name: 'Sampaio Corrêa', state: 'MA', division: 'Serie B', image: 'sampaio-correa.svg'},
    {name: 'Sport', state: 'PE', division: 'Serie B', image: 'sport.svg'},
    {name: 'Tombense', state: 'MG', division: 'Serie B', image: 'tombense.svg'},
    {name: 'Vasco', state: 'RJ', division: 'Serie B', image: 'vasco.svg'},
    {name: 'Vila Nova', state: 'GO', division: 'Serie B', image: 'vilanova.svg'},
]

export const Teams = {
    getAllTeams: (): Team[] => {
        return data.sort()
    }
}