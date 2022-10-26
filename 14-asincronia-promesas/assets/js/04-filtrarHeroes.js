import superHeroes from './db/heroes.js';

export const getHeroById = ( id ) => superHeroes.find( hero => hero.id === id )
export const getHeroesByOwner = ( owner ) => superHeroes.filter( hero => hero.owner === owner )

