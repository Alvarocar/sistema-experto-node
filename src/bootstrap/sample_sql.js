const Category = require('../domain/category')
const Movie = require('../domain/movie')
const MovieCategory = require('../domain/movie_category')

/* const categories_list = [
    "animacion",
    "aventura",
    "horror",
    "medieval",
    "juvenil",
    "infantil",
    "misterio",
    "mini series",
    "zombies",
    "vampiros",
    "musical",
    "juegos de mesa",
    "contenido explicito",
    "Animación 3D",
    "paranormal"
] */

const categories_list = [
    {
        "name": "animacion",
        "id": 1
    },
    {
        "name": "aventura",
        "id": 2
    },
    {
        "name": "horror",
        "id": 3
    },
    {
        "name": "medieval",
        "id": 4
    },
    {
        "name": "juvenil",
        "id": 5
    },
    {
        "name": "infantil",
        "id": 6
    },
    {
        "name": "misterio",
        "id": 7
    },
    {
        "name": "mini series",
        "id": 8
    },
    {
        "name": "zombies",
        "id": 9
    },
    {
        "name": "vampiros",
        "id": 10
    },
    {
        "name": "musical",
        "id": 11
    },
    {
        "name": "juegos de mesa",
        "id": 12
    },
    {
        "name": "contenido explicito",
        "id": 13
    },
    {
        "name": "Animación 3D",
        "id": 14
    },
    {
        "name": "paranormal",
        "id": 15
    },
    {
        "name": "piratas",
        "id": 16
    }
]

/* const movies_list = [
    "Legacies",
    "Matilda",
    "Gremlins",
    "Dracula",
    "It",
    "American horror story",
    "The walking dead",
    "Shadow hunters",
    "Diario de vampiros",
    "Teen wolf",
    "Una serie de eventos desafortunados",
    "Harry Potter",
    "once upon a time",
    "Al caer la noche",
    "Miss peregrine y los niños peculiares",
    "Charly y la fabrica de chocolates",
    "Jumanji",
    "Zathura",
    "Laberinto del fauno",
    "Van helsing",
    "Piratas del Caribe",
    "Game of thrones",
    "Señor de los anillos",
    "The Witcher",
    "El Hobbit",
    "Narnia",
    "Death Note",
    "Viaje de chihiro",
    "Mi vecino totoro",
    "El increíble castillo vagabundo",
    "La casa de los sustos",
    "Shrek",
    "El extraño mundo de jack",
    "El cadaver de la novia",
    "Encanto",
] */

const movie_list = [
    {
        "name": "Legacies",
        "id": 1
    },
    {
        "name": "Matilda",
        "id": 2
    },
    {
        "name": "Gremlins",
        "id": 3
    },
    {
        "name": "Dracula",
        "id": 4
    },
    {
        "name": "It",
        "id": 5
    },
    {
        "name": "American horror story",
        "id": 6
    },
    {
        "name": "The walking dead",
        "id": 7
    },
    {
        "name": "Shadow hunters",
        "id": 8
    },
    {
        "name": "Diario de vampiros",
        "id": 9
    },
    {
        "name": "Teen wolf",
        "id": 10
    },
    {
        "name": "Una serie de eventos desafortunados",
        "id": 11
    },
    {
        "name": "Harry Potter",
        "id": 12
    },
    {
        "name": "once upon a time",
        "id": 13
    },
    {
        "name": "Al caer la noche",
        "id": 14
    },
    {
        "name": "Miss peregrine y los niños peculiares",
        "id": 15
    },
    {
        "name": "Charly y la fabrica de chocolates",
        "id": 16
    },
    {
        "name": "Jumanji",
        "id": 17
    },
    {
        "name": "Zathura",
        "id": 18
    },
    {
        "name": "Laberinto del fauno",
        "id": 19
    },
    {
        "name": "Van helsing",
        "id": 20
    },
    {
        "name": "Piratas del Caribe",
        "id": 21
    },
    {
        "name": "Game of thrones",
        "id": 22
    },
    {
        "name": "Señor de los anillos",
        "id": 23
    },
    {
        "name": "The Witcher",
        "id": 24
    },
    {
        "name": "El Hobbit",
        "id": 25
    },
    {
        "name": "Narnia",
        "id": 26
    },
    {
        "name": "Death Note",
        "id": 27
    },
    {
        "name": "Viaje de chihiro",
        "id": 28
    },
    {
        "name": "Mi vecino totoro",
        "id": 29
    },
    {
        "name": "El increíble castillo vagabundo",
        "id": 30
    },
    {
        "name": "La casa de los sustos",
        "id": 31
    },
    {
        "name": "Shrek",
        "id": 32
    },
    {
        "name": "El extraño mundo de jack",
        "id": 33
    },
    {
        "name": "El cadaver de la novia",
        "id": 34
    },
    {
        "name": "Encanto",
        "id": 35
    }
]

const category_init = async () => {
    const categories = categories_list.map(v => Category.create(v))
    return await Promise.all(categories)
}

const movies_init = async () => {
 const movies = movie_list.map((v) => Movie.create(v))
 return await Promise.all(movies)
}

const movies_categories_init = async () => {
    MovieCategory.create({ id: 1, movie_id: 1, category_id:  1})
    MovieCategory.create({ id: 2, movie_id: 2, category_id:  6}) 
    MovieCategory.create({ id: 3, movie_id: 3, category_id:  3}) 
    MovieCategory.create({ id: 4, movie_id: 4, category_id:  3}) 
    MovieCategory.create({ id: 5, movie_id: 5, category_id:  3}) 
    MovieCategory.create({ id: 6, movie_id: 5, category_id:  7})
    MovieCategory.create({ id: 7, movie_id: 6, category_id:  8})
    MovieCategory.create({ id: 8, movie_id: 6, category_id:  7})
    MovieCategory.create({ id: 9, movie_id: 6, category_id:  3})
    MovieCategory.create({ id: 10, movie_id: 7, category_id:  3})
    MovieCategory.create({ id: 11, movie_id: 7, category_id:  9})
    MovieCategory.create({ id: 12, movie_id: 7, category_id:  9})
    MovieCategory.create({ id: 13, movie_id: 8, category_id:  5})
    MovieCategory.create({ id: 14, movie_id: 8, category_id:  3})
    MovieCategory.create({ id: 15, movie_id: 9, category_id:  3})
    MovieCategory.create({ id: 16, movie_id: 9, category_id:  5})
    MovieCategory.create({ id: 17, movie_id: 9, category_id:  10})
    MovieCategory.create({ id: 18, movie_id: 10, category_id:  3})
    MovieCategory.create({ id: 19, movie_id: 10, category_id:  5})
    MovieCategory.create({ id: 20, movie_id: 11, category_id:  2})
    MovieCategory.create({ id: 21, movie_id: 12, category_id:  2})
    MovieCategory.create({ id: 22, movie_id: 13, category_id:  2})
    MovieCategory.create({ id: 23, movie_id: 14, category_id:  2})
    MovieCategory.create({ id: 24, movie_id: 14, category_id:  6})
    MovieCategory.create({ id: 25, movie_id: 15, category_id:  2})
    MovieCategory.create({ id: 26, movie_id: 15, category_id:  6})
    MovieCategory.create({ id: 27, movie_id: 16, category_id:  2})
    MovieCategory.create({ id: 28, movie_id: 16, category_id:  6})
    MovieCategory.create({ id: 29, movie_id: 16, category_id:  11})
    MovieCategory.create({ id: 30, movie_id: 17, category_id:  2})
    MovieCategory.create({ id: 31, movie_id: 17, category_id:  6})
    MovieCategory.create({ id: 32, movie_id: 17, category_id:  12})
    MovieCategory.create({ id: 33, movie_id: 18, category_id:  2})
    MovieCategory.create({ id: 34, movie_id: 18, category_id:  6})
    MovieCategory.create({ id: 35, movie_id: 18, category_id:  12})
    MovieCategory.create({ id: 36, movie_id: 19, category_id:  2})
    MovieCategory.create({ id: 37, movie_id: 19, category_id:  3})
    MovieCategory.create({ id: 38, movie_id: 20, category_id:  2})
    MovieCategory.create({ id: 39, movie_id: 20, category_id:  3})
    MovieCategory.create({ id: 40, movie_id: 20, category_id:  10})
    MovieCategory.create({ id: 41, movie_id: 21, category_id:  2})
    MovieCategory.create({ id: 42, movie_id: 21, category_id:  16})
    MovieCategory.create({ id: 43, movie_id: 22, category_id:  2})
    MovieCategory.create({ id: 44, movie_id: 22, category_id:  4})
    MovieCategory.create({ id: 45, movie_id: 22, category_id:  13})
    MovieCategory.create({ id: 46, movie_id: 23, category_id:  2})
    MovieCategory.create({ id: 47, movie_id: 23, category_id:  4})
    MovieCategory.create({ id: 48, movie_id: 24, category_id:  2})
    MovieCategory.create({ id: 49, movie_id: 24, category_id:  4})
    MovieCategory.create({ id: 50, movie_id: 25, category_id:  2})
    MovieCategory.create({ id: 51, movie_id: 25, category_id:  4})
    MovieCategory.create({ id: 52, movie_id: 26, category_id:  2})
    MovieCategory.create({ id: 53, movie_id: 26, category_id:  4})
    MovieCategory.create({ id: 54, movie_id: 27, category_id:  1})
    MovieCategory.create({ id: 55, movie_id: 28, category_id:  1})
    MovieCategory.create({ id: 56, movie_id: 28, category_id:  2})
    MovieCategory.create({ id: 57, movie_id: 29, category_id:  1})
    MovieCategory.create({ id: 58, movie_id: 29, category_id:  2})
    MovieCategory.create({ id: 59, movie_id: 30, category_id:  1})
    MovieCategory.create({ id: 60, movie_id: 30, category_id:  2})
    MovieCategory.create({ id: 61, movie_id: 31, category_id:  1})
    MovieCategory.create({ id: 62, movie_id: 31, category_id:  14})
    MovieCategory.create({ id: 63, movie_id: 32, category_id:  1})
    MovieCategory.create({ id: 64, movie_id: 32, category_id:  2})
    MovieCategory.create({ id: 65, movie_id: 32, category_id:  14})
    MovieCategory.create({ id: 67, movie_id: 33, category_id:  1})
    MovieCategory.create({ id: 68, movie_id: 33, category_id:  15})
    MovieCategory.create({ id: 69, movie_id: 33, category_id:  14})
    MovieCategory.create({ id: 70, movie_id: 33, category_id:  11})
    MovieCategory.create({ id: 71, movie_id: 34, category_id:  1})
    MovieCategory.create({ id: 72, movie_id: 34, category_id:  15})
    MovieCategory.create({ id: 73, movie_id: 34, category_id:  14})
    MovieCategory.create({ id: 74, movie_id: 34, category_id:  11})
    MovieCategory.create({ id: 75, movie_id: 35, category_id:  11})
    MovieCategory.create({ id: 76, movie_id: 35, category_id:  1})
    MovieCategory.create({ id: 77, movie_id: 35, category_id:  14})
    
}


module.exports = async () => {
    const movies = await MovieCategory.findAll()
    if (movies.length > 0) {
        return
    }
    await category_init()
    await movies_init()
    await movies_categories_init()
}