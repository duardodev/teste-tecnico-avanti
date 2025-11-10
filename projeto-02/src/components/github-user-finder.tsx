import { useState, type FormEvent } from 'react';
import { LoaderCircle } from 'lucide-react';
import logo from '../assets/logo.svg';
import searchIcon from '../assets/search.svg';

interface User {
  name: string;
  avatar_url: string;
  bio: string;
}

export function GitHubUserFinder() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (!username.trim()) return;

    setIsLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (response.status === 404) {
        setError('Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente');
        return;
      }
      if (!response.ok) throw new Error('Erro ao buscar o usuário');

      const data: User = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
      setError('Falha ao consumir a API do GitHub');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={logo} alt="Ícone do GitHub" className="mb-[27px]" />

      <div className="bg-white border border-[#DDDDDD] rounded-[10px] w-full max-w-[503px] pl-4 mb-[33px]">
        <form onSubmit={handleSearch} className="flex items-center h-[62px]">
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Digite um usuário do Github"
            className="text-black placeholder:text-black font-semibold text-xl focus:outline-none pr-4 flex-1 h-full"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="h-full w-[62px] disabled:opacity-50 disabled:cursor-not-allowed bg-[#005CFF] flex items-center justify-center rounded-[10px] cursor-pointer"
          >
            {<img src={searchIcon} alt="" />}
          </button>
        </form>
      </div>

      {isLoading && <LoaderCircle className="animate-spin w-10 h-10" />}

      {user && (
        <div className="w-full max-w-[804px] min-h-[257px] bg-[#D9D9D9] rounded-[25px] flex items-center px-[33px] py-[18px] gap-x-8">
          <div className="w-[220px] h-[220px] border-2 border-[#005CFF] rounded-full flex-shrink-0">
            <img src={user.avatar_url} alt="Avatar do Usuário" className="object-cover h-full w-full rounded-full" />
          </div>

          <div className="flex flex-col gap-y-4 max-w-[448px]">
            <h2 className="text-[#005CFF] text-xl font-bold">{user.name || 'Nome não disponível'}</h2>

            <p className="text-[15px] font-light text-black">{user.bio || 'Biografia não disponível'}</p>
          </div>
        </div>
      )}

      {error && (
        <div className="w-full max-w-[710px] min-h-[88px] px-[80px] bg-[#D9D9D9] rounded-[10px] flex items-center justify-center">
          <p className="text-xl text-[#FF0000] text-center">{error}</p>
        </div>
      )}
    </div>
  );
}
