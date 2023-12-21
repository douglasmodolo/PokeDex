import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { CardActionArea, Box, Typography, CardMedia, CardContent, Card } from '@mui/material';

const typeColors = {
  normal: "#a8a878",
  fighting: "#c03028",
  flying: "#a890f0",
  poison: "#a040a0",
  ground: "#e0c068",
  rock: "#b8a038",
  bug: "#a8b820",
  ghost: "#705898",
  steel: "#b8b8d0",
  fire: "#f08030",
  water: "#6890f0",
  grass: "#78c850",
  electric: "#f8d030",
  psychic: "#f85888",
  ice: "#98d8d8",
  dragon: "#7038f8",
  dark: "#705848",
  fairy: "#ee99ac",
};

export default function PokemonCard({ name, image, types }) {
  const theme = useTheme();

  const typeHandler = () => {
    if (types[1]) {
      return firstCharUpper(types[0].type.name) + " | " + firstCharUpper(types[1].type.name)
    }
    return firstCharUpper(types[0].type.name)
  }

  const typeColor = () => {
    if (types.length > 0) {
      const firstType = types[0].type.name
      return typeColors[firstType] || "#ccc"
    }
    return "#ccc"
  }

  const firstCharUpper = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <Card sx={{ display: 'flex', height: 150, backgroundColor: typeColor(types) }}>      
      <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div" color="white" >
              {firstCharUpper(name)}
            </Typography>
          </Box>
          <Typography gutterBottom variant="caption" component="div">
            {typeHandler()}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        width="100%"
        height="auto"
        image={image}
        alt="pokemon"
        sx={{ objectFit: 'cover' }}
      />
    </Card>
  );
}
