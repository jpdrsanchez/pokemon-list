import { usePokemonList } from "../../hooks/usePokemonList"
import styles from './styles.module.css'

export const PokemonList = () => {
  const { loading, pokemons } = usePokemonList()

  return (
    <div className={styles.list}>
      {loading && <p>Carregando...</p>}
      {!loading && pokemons?.map((pokemon, index) => (
        <div className={styles['list-item']} key={index}>
          <p className={styles['item-name']}>{pokemon.name}</p>
        </div>
      ))}
    </div>
  )
}