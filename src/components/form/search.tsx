import { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Input } from './input';

const Search = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(title ?? '');

  useEffect(() => {
    setSearchValue(title ?? '');
  }, [title]);

  const handleChangeValue = (value: string) => {
    setSearchValue(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/');
    setSearchValue('');
    setSearchParams({ query: searchValue }, { state: { shouldSearch: true } });
  };

  return (
    <div className="mb-4">
      <p className="mb-2 text-2xl font-bold">Search by tag</p>
      <form className="flex max-w-lg gap-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search by tag"
          required
          name="search"
          value={searchValue}
          onChange={e => handleChangeValue(e.target.value)}
        />
        <button type="submit" className="rounded-md bg-sky-600 p-2 text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
