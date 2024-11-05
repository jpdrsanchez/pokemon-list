import { useCallback, useEffect, useState } from "react"
import { PokemonService } from "../../services/pokeapi/pokemon"
import { PokemonListRequest } from "../../services/pokeapi/pokemon/types"

export const usePokemonList = () => {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [filters, setFilters] = useState({
    offset: 0,
    limit: 25
  })

  const listPokemons = useCallback(async (request: PokemonListRequest) => {
    try {
      setLoading(true)
      const response = await PokemonService.list(request)
      setPokemons(response.results)
    } catch (err) {
      console.error(err)
    }
    finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    listPokemons(filters)
  }, [listPokemons, filters])

  return {
    loading,
    pokemons,
    setFilters
  }
}
