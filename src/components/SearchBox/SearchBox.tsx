import { useDebouncedCallback } from 'use-debounce';
import css from './SearchBox.module.css';

interface SearchBoxProps {
  onSearch: (value: string) => void;
}

function SearchBox({ onSearch }: SearchBoxProps) {
  const debouncedSearch = useDebouncedCallback((value: string) => {
    onSearch(value);
  }, 500);

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={e => debouncedSearch(e.target.value)}
    />
  );
}

export default SearchBox;
