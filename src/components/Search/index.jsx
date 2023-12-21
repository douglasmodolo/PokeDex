import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Search = ({ pokemonFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    pokemonFilter(term);
  };

  return (
    <div>
      <TextField
        // label="Pesquisar Pokémon"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          borderRadius: '25px', 
          border: 'none', 
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none', 
          },
          backgroundColor: 'white',
          width: "25em",
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  );
};
