import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SiderbarContainer } from './styles'

const Sidebar = () => (
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
      <BotaoTema>Trocar Tema</BotaoTema>
    </SiderbarContainer>
  </aside>
)

export default Sidebar
