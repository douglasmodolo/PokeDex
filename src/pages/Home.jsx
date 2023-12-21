import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from '@mui/system'
import { Grid, Box } from '@mui/material'
import { Skeletons } from '../components/Skeletons'
import PokemonCard from '../components/PokemonCard'
import Navbar from '../components/Navbar'
import { Search } from '../components/Search'

export const Home = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {
        var endpoints = []

        for (var i = 1; i < 200; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))
    }


    const pokemonFilter = (name) => {
        var filteredPokemons = []
        if (name === "") {
            getPokemons()
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i])
            }
        }
        setPokemons(filteredPokemons)
    }

    return (
        // <div style={{ backgroundColor: "#F9FBFD" }}>
        <div style={{ backgroundColor: "#F9FBFD", backgroundImage: "url('/assets/background.png')", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center" }}>        
            <Container maxWidth="xxl">
                <Container sx={{ marginBottom: "3em", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Box component="img" src='/assets/Pokemon-logo.png' height="10em" />
                    <Search pokemonFilter={pokemonFilter}/>
                </Container>
                <Container>
                    <Grid container spacing={2}>
                        {pokemons.length === 0 ? <Skeletons /> :
                            pokemons.map((pokemon, key) =>
                                <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                                    <PokemonCard
                                        name={pokemon.data.name}
                                        image={pokemon.data.sprites.front_default}
                                        types={pokemon.data.types}
                                    />
                                </Grid>
                            )
                        }
                    </Grid>
                </Container>
            </Container>
        </div>
    )
}
