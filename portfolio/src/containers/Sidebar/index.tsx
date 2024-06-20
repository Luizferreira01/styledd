import Avatar from '../../components/Avatar'
import Paragrafo, { Props } from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SiderbarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SiderbarContainer>
      <Avatar />
      <Titulo fontSize={20}>Luiz Felipe</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Luizferreira01
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SiderbarContainer>
  </aside>
)

export default Sidebar
