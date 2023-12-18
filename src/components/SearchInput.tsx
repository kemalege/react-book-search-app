import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { TextField } from '@radix-ui/themes'
import React from 'react'
import useBooks from '../hooks/useBook';

const SearchInput = () => {

  // Use the custom hook to get the book results
  const {setSearchTerm} = useBooks();

  // Handle the input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Render the search input
  return (
    <TextField.Root style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '4px 8px', width: '30vw'}}>
        <TextField.Slot style={{marginRight: '4px'}}>
            <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input onChange={handleInputChange} placeholder="Search the books…" />
    </TextField.Root>
  )
}

export default SearchInput