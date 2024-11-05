/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react"
import { usePokemonList } from "../../hooks/usePokemonList"
import styles from './styles.module.css'

export const PokemonList = () => {
  const { loading, pokemons } = usePokemonList()

  return (
    <div className={styles.list}>
      {loading && <p>Carregando...</p>}
      {!loading && pokemons?.map((pokemon: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }, index: Key | null | undefined) => (
        <div className={styles['list-item']} key={index}>
          <p className={styles['item-name']}>{pokemon.name}</p>
        </div>
      ))}
    </div>
  )
}