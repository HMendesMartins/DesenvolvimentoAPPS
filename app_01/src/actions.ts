import{Livro} from './livro';
import { biblioteca } from './dataBase';

export function BuscarLivroPorid(id : number) : Livro | undefined{
    return biblioteca.find(livro => livro.id == id );
}