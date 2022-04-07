import { Injectable } from '@angular/core';
import { Series } from './series';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  seriesList: Array<Series> = [
    { // Formato de Date: mes-día-año
      name: 'Tribus de Europa', releaseYear: new Date ('02-19-2021'), countries:'Alemania', season: 1, episodes: 6, genres: 'Alemanas, TV de ciencia ficción, Dramas TV, TV de acción y aventuras, Siniestra, Emocionante',
      description: 'En 2070, tres hermanos se proponen cambiar el destino de Europa después de que una catástrofe mundial la fracture en microestados que luchan por tener el dominio sobre el resto.', 
    }, 
    {
      name: 'Jupiter\'s Legacy', releaseYear: new Date('05-07-2021'), countries:'Estados Unidos', season: 1, episodes: 8, genres: 'TV de ciencia ficción, Series TV basadas en cómics, TV de acción y aventuras, Siniestra, Emocionante', 
      description: 'El plan de Brandon para estar a la altura de las expectativas de su padre sufre un revés. La despreocupada vida de Sheldon como el dijo del jefe se desmorona en 1929.', 
    },
    { 
      name: 'Katla', releaseYear: new Date('06-17-2021'), countries:'Islandia', season: 1, episodes: 8, genres: 'Misterios TV, TV de ciencia ficción, Series TV escandinavas, Escalofriante, Inquietante', 
      description: 'Los supervivientes siguen lidiando con las consecuencias de la erupción del Katla un año después. De repente, una mujer cubierta de ceniza aparece en el glaciar.', 
    },
    { 
      name: 'Kitz', releaseYear: new Date('12-30-2021'), countries:'Alemania', season: 1, episodes: 6, genres: 'Alemanas, Dramas TV sociales, Series TV juveniles, De suspense, Emotiva', 
      description: 'En Nochevieja, Lisi trabaja en una fiesta lujosa organizada por Vanessa, la chica adinerada a la que culpa de la trágica muerte de su hermano el año anterior.', 
    },
    { 
      name: 'El juego del calamar', releaseYear: new Date('09-17-2021'), countries:'Corea del Sur', season: 1, episodes: 9, genres: 'Coreanas, Thrillers TV, Dramas TV, De suspense', 
      description: 'El arruinado y desesperado Gi-hun acepta participar en un enigmático juego con la intención de ganar dinero fácil. Ya en la primera ronda se desata el horror.', 
    },
    { 
      name: 'Archivo 81', releaseYear: new Date('01-12-2022'), countries: 'Estados Unidos', season: 1, episodes: 8, genres: 'Misterios TV, TV de ciencia ficción, Terror para TV, Alucinante, Inquietante, Sesuda', 
      description: 'Dan, atormentado por una tragedia familiar, acepta restaurar unas cintas de vídeo para una empresa. Para su sorpresa, descubre que está relacionado con la directora.', 
    },
    { 
      name: 'Sweet tooth el niño ciervo', releaseYear: new Date('06-04-2021'), countries: 'Estados Unidos', season: 1, episodes: 8, genres: 'Series TV fantásticas, Series TV basadas en cómics, Dramas TV, Excéntrica, Conmovedora', 
      description: 'Gus, que vive con su padre en una cabaña remota, recibe lecciones de supervivencia y descubre los peligros que acechan tras la valla que les separa del mundo exterior.', 
    },
    { 
      name: 'Cero', releaseYear: new Date('04-21-2021'), countries:'Italia', season: 1, episodes: 8, genres: 'Italianas, TV de ciencia ficción, Series TV Juveniles, Motivadora, Conmovedora', 
      description: 'Después de un encuentro casual con Anna, Omar es acusado de prenderle fuego a una motocicleta... y, sin querer, revela el secreto de su invisibilidad a un matón local.'
    },
    { 
      name: 'El inocente', releaseYear: new Date('04-30-2020'), countries:'España', season: 1, episodes: 8, genres: 'Series TV policiacas, Españolas, Series TV basadas en libros, Siniestra, De suspense', 
      description: 'La vida de Mat da un giro radical al verse implicado en una pelea y matar por accidente a un hombre en un club. Años más tarde, la felicidad parece estar a su alcance.', 
    },
    { 
      name: 'Mortal', releaseYear: new Date('11-21-2019'), countries:'Francia', season: 2, episodes: 12, genres: 'Series TV policiacas, Series TV fantásticas, Series TV juveniles, De suspense', 
      description: 'Sofiane es un joven problemático decidido a encontrar a su hermano desaparecido que enreda a su apocado compañero Victor para firmar un pacto con un misterior ser.', 
    },
    { 
      name: 'Mar de la tranquilidad', releaseYear: new Date('12-24-2021'), countries:'Corea del Sur', season: 1, episodes: 8, genres: 'Coreanas, Misterios TV, TV de ciencia ficción, De suspense', 
      description: 'El informe sobre la misión presentado por la directora Choi no convence a Song Jian. Llegar a la estación de investigación ya supone toda una odisea para el equipo.', 
    },
    { 
      name: 'Clase letal', releaseYear: new Date('01-16-2019'), countries:'Estados Unidos', season: 1, episodes: 10, genres: 'Series TV juveniles, Thrillers TV, Dramas TV, Peculiar, Siniestra', 
      description: 'Un adolescente decepcionado encuentra motivación y pelea por sobrevivir en una academia de artes oscuras.', 
    },
    { 
      name: 'El cielo te está esperando', releaseYear: new Date('05-14-2021'), countries:'Corea del Sur', season: 1, episodes: 10, genres: 'Coreanas, Dramas TV, Conmovedora, emotiva', 
      description: 'El accidente mortal de un operario lleva a Han Jeong-u y Han Geu-ru hasta su habitación, donde sus metas para el futuro y el amor hacia sus padres salen a la luz.', 
    },
    { 
      name: 'Dark', releaseYear: new Date('12-01-2017'), countries:'Alemania', season: 3, episodes: 26, genres: 'Alemanas, Misterios TV, Series TV policiacas, Alucinante, Escalofriante, Inquietante', 
      description: '2019. La desaparición de un chico desata el pánico entre los habitantes de Winden, una pequeña ciudad alemana que carga con una extraña y trágica historia.', 
    },
    { 
      name: 'Quédate a mi lado', releaseYear: new Date('12-31-2021'), countries:'Reino Unido', season: 1, episodes: 8, genres: 'Misterios TV, Series TV policiacas, Británicas, Inquietante, De suspense, Emotiva', 
      description: 'Mientras su boda se aproxima, una visita del pasado preocupa a Megan Pierce. El oficial Mike Broome investiga una desaparición que le recuerda a un antiguo caso.', 
    },
    { 
      name: '¿Sabes quién es?', releaseYear: new Date('02-05-2019'), countries:'Estados Unidos', season: 1, episodes: 10, genres: 'Misterios TV, Series TV policiacas, Series TV basadas en libros, De suspense, Emotiva', 
      description: 'El 30.º cumpleaños de Andy se ve interrumpido por un acto muy violento. Cuando la sorprendente respuesta de su madre se vuelve viral, surge una amenaza en su casa.', 
    },
    { 
      name: 'Lupin', releaseYear: new Date('01-08-2021'), countries:'Francia', season: 2, episodes: 10, genres: 'Misterios TV, Series TV policiacas, Series TV basadas en libros, Emocionante', 
      description: 'Para descubrir quién mató a su padre, el elegante ladrón Assane debe proteger a sus seres queridos mientras vive unas tensas relaciones románticas y atrevidas aventuras.', 
    },
    { 
      name: 'Medianoche en el Pera Palace', releaseYear: new Date('02-03-2022'),  countries:'Turquía', season: 1, episodes: 8, genres: 'Turcas, Series TV políticas, Series TV basadas en libros, De suspense, Emocionante', 
      description: 'Mientras busca información para escribir un artículo sobre el hotel Pera Palace, Esra viaja al año 1919, conoce a una doble suya y se ve envuelta en una intriga política.', 
    },
    { 
      name: 'Sex Education', releaseYear: new Date('01-11-2019'),  countries:'Reino Unido', season: 3, episodes: 24, genres: 'Británicas, Series TV juveniles, Dramas TV, Picante, Irreverente, Conmovedora', 
      description: 'Ligar es difícil, pero un empollón demuestra ser un experto en sexo en esta serie <<sensible, dulce y descarada hasta la médula>>, según \'The Atlantic\'.', 
    },
    { 
      name: 'Jane the virgin', releaseYear: new Date('10-13-2014'),  countries:'Estados Unidos', season: 5, episodes: 100, genres: 'Dramas TV románticos, Comedias TV románticas, Dramas TV, Petarda, Excéntrica, Romántica', 
      description: 'La vida de una trabajadora y religiosa joven de ascendencia venezolana cambia radicalmente cuando una médica la insemina artificialmente sin querer.', 
    },
    { 
      name: 'Titanes', releaseYear: new Date('10-12-2018'),  countries:'Estados Unidos', season: 3, episodes: 37, genres: 'Series TV policiacas, TV de ciencia ficción, Series TV basadas en cómics, Descarnada, Siniestra', 
      description: 'No tienen nada en común, salvo sus diferencias. Por separado, son buscaods y temidos. Peor juntos, son Titans.', 
    },
    { 
      name: 'You', releaseYear: new Date('12-26-2018'),  countries:'Estados Unidos', season: 3, episodes: 30, genres: 'Series TV basadas en libros, Thrillers TV, Dramas TV, Siniestra, De suspense', 
      description: 'Penn Badgley da un giro hacia lo siniestro en esta serie en la que también participan Victoria Pedretti y John Stamos.', 
    },
    { 
      name: 'La casa de papel', releaseYear: new Date('05-02-2017'),  countries:'España', season: 5, episodes: 41, genres: 'Series TV policiacas, Españolas, Thrillers TV, De suspense, Emocionante', 
      description: 'Ocho atracadores toman rehenes en la Fábrica Nacional de Moneda y Timbre española. Desde el encierro, su líder manipula a la policía para llevar a cabo un ambicioso plan.', 
    },
    { 
      name: 'Superstore', releaseYear: new Date('11-30-2015'),  countries:'Estados Unidos', season: 6, episodes: 113, genres: 'Sitcoms, Comedias TV, Series TV de EE UU, Irreverente', 
      description: 'En una gran tienda de San Luis, unos empleados con personalidades fuera de lo común se soportan entre ellos mientras lidian con los clientes y las tareas cotidianas.', 
    },
    { 
      name: '¿Quién mató a Sara?', releaseYear: new Date('03-24-2021'),  countries:'México', season: 2, episodes: 18, genres: 'Mexicanas, Misterios TV, Series TV policiacas, Inquietante, Siniestra, De suspense', 
      description: 'Álex pone en marcha su plan contra la familia LAzcano en la celebración del ascenso de Rodolfo a gerente general. Una tal Diana Cazadora le ofrece su ayuda.', 
    },
    { 
      name: 'Gambito de Dama', releaseYear: new Date('10-23-2020'), countries:'Estados Unidos', season: 1, episodes: 7, genres: 'Series TV basadas en libros, Dramas TV sociales, Dramas TV, Sesuda, Íntima, Emotiva', 
      description: 'Beth, de 9 años, es enviada a un orfanato, donde desarrolla unas dotes increíbles para el ajedrez y se vuelve adicta a los tranquilizantes que administran a los niños.', 
    },
    { 
      name: 'Ragnarok', releaseYear: new Date('01-31-2020'), countries:'Noruega', season: 2, episodes: 12, genres: 'Noruegas, Misterios TV, Series TV fantásticas, Emocionante', 
      description: 'David Stakston y Herman Tømmeraas protagonizan esta serie fantástica inspirada en la mitología nórdica y ambientada en la Noruega actual.', 
    },
    { 
      name: 'Otra vida', releaseYear: new Date('03-08-2019'), countries:'Estados Unidos', season: 2, episodes: 20, genres: 'TV de ciencia ficción, Thrillers TV, Dramas TV, De suspense, Emocionante', 
      description: 'Un misterioso objeto alienígena. Una peligrosa misión. Una valiente tripulación. La pregunta es: ¿vienen en son de paz?', 
    },
    { 
      name: 'Educar a un superhéroe', releaseYear: new Date('10-04-2019'),countries:'Estados Unidos', season: 2, episodes: 17, genres: 'TV infantil, Series TV basadas en cómics, TV para ver en familia, Inteligente, Conmovedora, Emocionante', 
      description: 'Ja\'Siah Young protagoniza esta serie dramática basada en un cómic de Dennis Liu y con Michael B. Jordan de productor ejecutivo.', 
    },
    { 
      name: 'New Amsterdam', releaseYear: new Date('09-25-2018'),  countries:'Estados Unidos', season: 2, episodes: 40, genres: 'Series TV sobre médicos, Series TV basadas en libros, Dramas TV sociales, Conmovedora, Emotiva', 
      description: 'El doctor Max Goodwin, un médico recién llegado, rompe las reglas del hospital público más antiguo de los Estados Unidos, aunque lo hace porque tiene un buen propósito: desmantelar tanta burocracia y mejorar los servicios hospitalarios.', 
    },
    { 
      name: 'Blood & Water', releaseYear: new Date('05-20-2020'),  countries:'Sudáfrica', season: 2, episodes: 13, genres: 'Sudafricanas, Misterios TV, Series TV juveniles, De suspense', 
      description: 'Ha pasado un año más desde la desaparición de su heramana y Puleng, harta del dolor de sus padres, escapa en busca de un poco de alegría... y algo más.', 
    },
    { 
      name: 'The A list', releaseYear: new Date('08-30-2019'),  countries:'Reino Unido', season: 2, episodes: 21, genres: 'Misterios TV, Británicas, TV para ver en familia, Escalofriante, De suspense', 
      description: 'Mia, la chica mala popular, descubre un mundo de rivalidades mortales y secretos sobrenaturales cuando una siniestra recién llegada amenaza con arrebatarle su influencia.', 
    },
    { 
      name: 'Into the night', releaseYear: new Date('05-05-2020'), countries:'Bélgica', season: 2, episodes: 12, genres: 'Belgas, TV de ciencia ficción, Series TV basadas en libros, De suspense, Emotiva', 
      description: 'Sylvie, una expiloto militar, se ve arrastrada a la cabina del avión para ayudar cuando un hombre armado secuestra su vuelo nocturno a Moscú.', 
    },
    { 
      name: 'Élite', releaseYear: new Date('10-05-2018'),  countries:'España', season: 4, episodes: 32, genres: 'Misterios TV, Series TV policiacas, Españolas, De suspense', 
      description: 'Otro año escolar, otro misterio. En Las Encinas no importan las notas que saques, sino el crimen que resuelvas.', 
    },
    {
      name: 'Locke & Key', releaseYear: new Date('02-07-2020'),  countries:'Estados Unidos', season: 1, episodes: 10, genres: 'Series TV fantásticas, Series TV juveniles, Dramas TV, Alucinante, Irreverente', 
      description: 'En esta serie protagonizada por Emilia Jones y Connor Jessup, los hermanos Locke abren la puerta a la magia, el misterio y el peligro en su espeluznante nueva casa.', 
    },
    { 
      name: 'On my block', releaseYear: new Date('03-16-2018'),  countries:'Estados Unidos', season: 4, episodes: 38, genres: 'Dramas TV románticos, Comedias TV románticas, Series TV juveniles, Emotiva, Romántica', 
      description: 'Esta serie sobre el paso a la edad adulta premiada con el Teen Choice mezcla comedia, aventura, romance y drama.', 
    },
    { 
      name: 'Biohackers', releaseYear: new Date('08-20-2020'),  countries:'Alemania', season: 1, episodes: 10, genres: 'Alemanas, Series TV sobre médicos, TV de ciencia ficción, Sesuda, Emotiva', 
      description: 'Tras conocer a sus excéntricos compañeros de piso, Mia asiste a su primera clase con la Dra. Lorenz y hace buenas migas con el ayudante de investigación de la profesora.', 
    },
    { 
      name: 'La Reina del Flow', releaseYear: new Date('06-12-2018'),  countries:'Colombia', season: 2, episodes: 171, genres: 'Colombianas, Series TV policiacas, Dramas TV, Emotiva', 
      description: 'Esta telenovela colombiana de 2018 protagonizada por Carolina Ramírez y Carlos Torres trata sobre la venganza, la música y el perdón.', 
    },
    { 
      name: 'Altamar', releaseYear: new Date('04-24-2019'),  countries:'España', season: 3, episodes: 22, genres: 'Misterios TV, Series TV policiacas, Españolas, De suspense, Emotiva', 
      description: 'Dos hermanas descubren siniestros secretos familiares tras una oleada de misteriosos asesinatos en un barco de lujo que navega de España a Brasil en los años 40.', 
    },
    { 
      name: 'Black Mirror', releaseYear: new Date('12-04-2011'),  countries:'Reino Unido', season: 5, episodes: 22, genres: 'Británicas, TV de ciencia ficción, Thrillers TV, Alucinante, Escalofriante, Inquietante', 
      description: 'Esta serie de ciencia ficción explora un futuro próximo muy inquietante, donde las grandes innovaciones de la raza humana chocan con sus peores instintos.', 
    }
  ]
  constructor() { }

  // Method to return all series
  getSeries(){
    return this.seriesList;
  }

  // Method to add serie
  addSerie(serie:Series):void{
    this.seriesList.unshift(serie);
  }

  // Method to search serie
  searchSerie(index:number):Series {
    return this.seriesList[index];
  }

  // Method to edit serie
  editSerie(serie:Series, index:number):void{
    this.seriesList[index].name = serie.name;
    this.seriesList[index].releaseYear = serie.releaseYear;
    this.seriesList[index].countries = serie.countries;
    this.seriesList[index].season = serie.season;
    this.seriesList[index].episodes = serie.episodes;
    this.seriesList[index].genres = serie.genres;
    this.seriesList[index].description = serie.description;
  }

  // Method to delete serie
  deleteSerie (indice:number):void {
    this.seriesList.splice(indice,1);
  }
}
