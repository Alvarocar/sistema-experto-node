init(animacion).
init(aventura).
init(horror).
init(medieval).

genero(aventura).

genero(horror).

genero(medieval).

genero(juvenil).

genero(infantil).

genero(misterio).

genero(mini_series).

genero(zombies).

genero(vampiros).

genero(musical).

genero(juegos_de_mesa).

genero(contenido_explicito).

genero(d3d).

genero(paranormal).

genero(piratas).

caracteristica("Legacies" , juvenil).

caracteristica("Matilda", infantil).

caracteristica("Gremlins", horror).

caracteristica("Dracula", horror).

caracteristica("It", horror).
caracteristica("It", misterio).

caracteristica("American horror story", mini_series).
caracteristica("American horror story", misterio).
caracteristica("American horror story", horror).


caracteristica("The walking dead", horror).
caracteristica("The walking dead", zombies).

caracteristica("Shadow hunters", juvenil).
caracteristica("Shadow hunters", horror).

caracteristica("Diario de vampiros", horror).
caracteristica("Diario de vampiros", juvenil).
caracteristica("Diario de vampiros", vampiros).

caracteristica("Teen wolf", horror).
caracteristica("Teen wolf", juvenil).

caracteristica("Una serie de eventos desafortunados", aventura).
caracteristica("Harry Potter", aventura).
caracteristica("once upon a time", aventura).

caracteristica("Al caer la noche", aventura).
caracteristica("Al caer la noche", infantil).
caracteristica("Miss peregrine y los niños peculiares", aventura).
caracteristica("Miss peregrine y los niños peculiares", infantil).

caracteristica("Charly y la fabrica de chocolates", aventura).
caracteristica("Charly y la fabrica de chocolates", infantil).
caracteristica("Charly y la fabrica de chocolates", musical).

caracteristica("Jumanji", aventura).
caracteristica("Jumanji", infantil).
caracteristica("Jumanji", juegos_de_mesa).

caracteristica("Zathura", aventura).
caracteristica("Zathura", infantil).
caracteristica("Zathura", juegos_de_mesa).

caracteristica("Laberinto del fauno", aventura).
caracteristica("Laberinto del fauno", horror).

caracteristica("Van helsing", aventura).
caracteristica("Van helsing", horror).
caracteristica("Van helsing", vampiros).

caracteristica(piratas_del_caribe, aventura).
caracteristica(piratas_del_caribe, piratas).

caracteristica("Game of thrones", aventura).
caracteristica("Game of thrones", medieval).
caracteristica("Game of thrones", contenido_explicito).

caracteristica("Señor de los anillos", aventura).
caracteristica("Señor de los anillos", medieval).

caracteristica("The Witcher", aventura).
caracteristica("The Witcher", medieval).

caracteristica("El Hobbit", aventura).
caracteristica("El Hobbit", medieval).

caracteristica("Narnia", aventura).
caracteristica("Narnia", medieval).

caracteristica("Death Note", animacion).

caracteristica("Viaje de chihiro", animacion).
caracteristica("Viaje de chihiro", aventura).

caracteristica("Mi vecino totoro", animacion).
caracteristica("Mi vecino totoro", aventura).

caracteristica("El increíble castillo vagabundo", animacion).
caracteristica("El increíble castillo vagabundo", aventura).

caracteristica("La casa de los sustos", animacion).
caracteristica("La casa de los sustos", d3d).

caracteristica("Shrek", animacion).
caracteristica("Shrek", aventura).
caracteristica("Shrek", d3d).

caracteristica("El extraño mundo de jack", animacion).
caracteristica("El extraño mundo de jack", paranormal).
caracteristica("El extraño mundo de jack", d3d).
caracteristica("El extraño mundo de jack", musical).


caracteristica("El cadaver de la novia", animacion).
caracteristica("El cadaver de la novia", paranormal).
caracteristica("El cadaver de la novia", d3d).
caracteristica("El cadaver de la novia", musical).

caracteristica("Encanto", musical).
caracteristica("Encanto", animacion).
caracteristica("Encanto", d3d).

opciones(Result, Genero) :- caracteristica(Movie,Genero), caracteristica(Movie, Result), (Genero \= Result).
