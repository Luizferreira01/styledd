/* eslint-disable react/no-unknown-property */
import { MouseEventHandler } from 'react'
import { P } from './styles'

export type Props = {
  trocaTema:  MouseEventHandler<HTMLButtonElement> | undefined
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
