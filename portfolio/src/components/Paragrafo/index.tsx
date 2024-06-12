/* eslint-disable react/no-unknown-property */
import { P } from './styles'

export type Props = {
  children: string
  tipo?: string
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => (
  <p tipo={tipo}>{children}</p>
)

export default Paragrafo
