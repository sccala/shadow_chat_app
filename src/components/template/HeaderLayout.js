import { Header } from '../pages/Header'

export const HeaderLayout = props => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
    </>
  )
}
