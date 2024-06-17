import styled from 'styled-components'

import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

const Card = styled.div`
  border: 1px solid #C1C1C1;
  padding: 16px;
`

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista De Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista De Tarefas Feita Com VueJS</Paragrafo>
  </Card>
)

export default Projeto
