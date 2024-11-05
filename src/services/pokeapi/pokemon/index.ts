import { instance } from "..";
import { PokemonListRequest } from "./types";

export class PokemonService {
  static async list(request: PokemonListRequest) {
    const url = `/v2/pokemon?limit=${request.limit}&offset=${request.offset}`

    const response = await instance.get(url)

    return response.data
  }
}