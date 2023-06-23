CREATE DATABASE libroteca;

/* CREACION BASE DE DATOS */

/*CREATE TABLE genero (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE autor (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nombre_apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NULL,
    origen VARCHAR(100) NULL
);

CREATE TABLE libro (
    id INT IDENTITY(1,1) PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    sinopsis TEXT NOT NULL,
    imagen VARCHAR(100) NOT NULL,
    fecha_emision DATE NOT NULL,
    autor_id INT NOT NULL,
    genero_id INT NOT NULL,
    FOREIGN KEY (autor_id) REFERENCES autor(id),
    FOREIGN KEY (genero_id) REFERENCES genero(id)
);*/

/* INSERTS */
SET IDENTITY_INSERT autor OFF;  
SET IDENTITY_INSERT genero OFF;
SET IDENTITY_INSERT libro OFF;

SET IDENTITY_INSERT genero ON;
INSERT INTO genero (id, nombre)
VALUES ('1', 'Drama'),
	   ('2', 'Romance'),
	   ('3', 'Fantasía'),
	   ('4', 'Historia'),
	   ('5', 'Aventura'), 
	   ('6', 'Suspenso'),
	   ('7', 'Filosofía'),
	   ('8', 'Ciencia ficción'),
	   ('9', 'Literatura Juvenil'), 
	   ('10', 'Literatura clásica');
SET IDENTITY_INSERT genero OFF;

SET IDENTITY_INSERT autor ON;
INSERT INTO autor (id, nombre_apellido, fecha_nacimiento, origen)
VALUES ('1', 'Joanne Rowling', '1965-07-31', 'Reino Unido'),
	   ('2', 'Stephen Edwin King', '1947-09-21', 'Estados Unidos'),
	   ('3', 'Brandon Sanderson', '1975-12-19', 'Estados Unidos'),
	   ('4', 'Antoine Marie Jean-Baptiste Roger', '1990-05-15', 'Francia'),
	   ('5', 'John Ronald Reuel Tolkien', '1892-01-03', 'Bloemfontein'),
	   ('6', 'Annelies Marie Frank', '1929-06-12', 'Alemania'),
	   ('7', 'Miguel de Cervantes Saavedra', '1547-09-29', 'España'),
	   ('8', 'Charles Henry Selick', '1952-11-30', 'Estados Unidos');
SET IDENTITY_INSERT autor OFF;

SET IDENTITY_INSERT libro ON;
INSERT INTO libro (id, titulo, sinopsis, fecha_emision, autor_id, imagen, genero_id) 
VALUES ('1', 'Harry Potter y la piedra filosofal', 'Harry Potter se ha quedado huérfano y vive en casa
       de sus abominables tíos y del insoportable primo Dudley. Se siente muy triste y solo, hasta que un 
	   buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como 
	   alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento, la suerte de Harry da
	   un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas 
	   de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch, especie de fútbol aéreo
	   que se juega montado sobre escobas, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos.
	   Pero, sobre todo, conocerá los secretos que le permitirán cumplir con su destino. Pues, aunque no lo parezca a primera vista,
	   Harry no es un chico común y corriente. íEs un verdadero mago!', '1997-06-26', 1, 'https://www.lanormal.com.ar/media/libros/bd4be862594dc7fdb53166047e87f2af.jpg', 3),

	   ('2', 'La niebla', 'El maestro se supera a sí mismo... en aterrar. He aquí una serie de historias -unas, horripilantes en su
	   extravagancia; otras, tan terroríficas que disparan el corazón- que son el producto más acabado de una de las más poderosas
	   imaginaciones de nuestro tiempo. En La niebla, historia inicial del libro, extensa como una novela, un supermercado se convierte 
	   en último bastión de la humanidad al invadir la tierra un enemigo inimaginable... En los desvanes hay cosas que conviene dejar 
	   tranquilas, cosas como El mono... La más soberbia conductora del mundo le ofrece a un hombre El atajo de la señora Todd, para 
	   llegar antes al paraíso... En fin, todo un ramillete de emociones y escalofríos, cuyas flores se abren por la noche...', '1980-01-01', 2, 'https://www.resumenlibro.com/img/libros/la-niebla.jpg', 9),

	   ('3', 'El imperio final', 'El imperio final inicia la saga Nacidos de la Bruma [Mistborn], obra imprescindible del Cosmere, el
	   universo destinado a dar forma a la serie más extensa y fascinante jamás escrita en el ámbito de la fantasía épica. Durante mil 
	   años han caído las cenizas y nada florece. Durante mil años los skaa han sido esclavizados y viven sumidos en un miedo inevitable.
	   Durante mil años el Lord Legislador reina con un poder absoluto gracias al terror, a sus poderes y a su inmortalidad. Le ayudan
	   obligadores e inquisidores, junto a la poderosa magia de la alomancia. Pero los nobles a menudo han tenido trato sexual con jóvenes
	   skaa y, aunque la ley lo prohíbe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los nacidos de la
	   bruma (mistborn). Ahora, Kelsier, el superviviente, el único que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una 
	   pobre chica skaa con mucha suerte... Tal vez los dos, unidos a la rebelión que los skaa intentan desde hace mil años, logren cambiar
	   el mundo y la atroz dominación del Lord Legislador. Desde 2006, y en solo diez años, Brandon Sanderson se ha consolidado como el gran
	   renovador de la fantasía del siglo XXI y el autor del género más prolífico del mundo.', '2006-07-17', 3, 'https://images.cdn1.buscalibre.com/fit-in/360x360/19/6b/196b0eda62be160160af64d0dfda3eee.jpg', 8),

	   ('4', 'El principito', 'En este libro, un aviador —Saint-Exupéry lo fue— se encuentra perdido en el desierto del Sahara, después de 
	   haber tenido una avería en su avión. Entonces aparece un pequeño príncipe. En sus conversaciones con él, el narrador revela su propia
	   visión sobre la estupidez humana y la sencilla sabiduría de los niños que la mayoría de las personas pierden cuando crecen y se hacen adultos.
	   El principito vive en un pequeño planeta, el asteroide B 612, en el que hay tres volcanes (dos de ellos activos y uno no) y una rosa. Pasa 
	   sus días cuidando de su planeta, y quitando los árboles baobab que constantemente intentan echar raíces allí. De permitirles crecer, los 
	   árboles partirían su planeta en pedazos. Un día decide abandonar su planeta, quizás cansado de los reproches y reclamos de la rosa, para 
	   explorar otros mundos. Aprovecha una migración de pájaros para emprender su viaje y recorrer el universo; es así como visita seis planetas, 
	   cada uno de ellos habitado por un personaje: un rey, un vanidoso, un borracho, un hombre de negocios, un farolero y un geógrafo, los cuales, 
	   a su manera, demuestran lo vacías que se vuelven las personas cuando se transforman en adultas.El último personaje que conoce, el geógrafo, 
	   le recomienda viajar a un planeta específico, la Tierra, donde entre otras experiencias acaba conociendo al aviador que, ya habíamos comentado,
	   estaba perdido en el desierto.', '1943-04-06', 4, 'https://cdn.culturagenial.com/es/imagenes/el-principito-portada-cke.jpg', 3),

       ('5', 'El hobbit', 'Smaug parecía profundamente dormido cuando Bilbo espió una vez más desde la entrada. ¡Pero fingía estar dormido! ¡Estaba 
	   vigilando la entrada del túnel!... Sacado de su cómodo agujero-hobbit por Gandalf y una banda de enanos, Bilbo se encuentra de pronto en medio 
	   de una conspiración que pretende apoderarse del tesoro de Smaug el Magnífico, un enorme y muy peligroso dragón...', '1937-09-21', 5, 'https://i.pinimg.com/originals/c0/7f/03/c07f0335aab7d6b4d32d90ab7ba9e7d5.jpg', 3),

       ('6', 'Diario de Ana Frank', 'Tras la invasión a Holanda, los Frank, comerciantes judíos alemanes emigrados a Amsterdam en 1933, se ocultaron
	   de la Gestapo en una buhardilla anexa al edificio donde el padre de Ana tenía sus oficinas. Eran ocho personas y permanecieron recluidas desde
	   junio de 1942 hasta agosto de 1944, fecha en que fueron detenidos y enviados a un campo de concentración. En ese lugar, y en las más precarias 
	   condiciones, Ana, a la sazón una niña de trece años, escribió su estremecedor Diario: un testimonio único en su género sobre el horror y la 
	   barbarie nazi, y sobre los sentimientos y experiencias de la propia Ana y sus acompañantes. Ana murió en el campo de Bergen-Belsen en marzo de 1945. 
	   Su Diario nunca morirá.', '1947-06-25', 6, 'https://i.pinimg.com/originals/9e/ff/d4/9effd465ad2ff1eb3fd38dfc627d23a4.jpg', 4),

       ('7', 'Don Quijote de la mancha', 'Una de las novelas más importantes de todos los tiempos y para muchos la obra definitiva de la literatura 
	   española. Escrita por Miguel de Cervantes (1547-1616) y publicada entre 1605 y 1615, narra las aventuras del ingenioso hidalgo Don Quijote de 
	   la Mancha (llamado realmente Alonso Quijano), en su misión personal de enmendar entuertos en donde los hubiere, acompañado de su fiel escudero, 
	   y amigo Sancho Panza. Nacida del amor de su autor por la novela caballeresca, Don Quijote se convirtió en una oda a ese particular estilo y en
	   una crítica mordaz y humorística de la sociedad y el mundo de la época.', '1605-01-26', 7, 'https://m.media-amazon.com/images/I/81ZjUiD419L._AC_UF1000,1000_QL80_.jpg', 5),

       ('8', 'Coraline', 'Al día siguiente de mudarse de casa, Coraline explora las catorce puertas de su nuevo hogar. Trece se pueden abrir con 
	   normalidad, pero la decimocuarta está cerrada y tapiada. Cuando por fin consigue abrirla, Coraline se encuentra con un pasadizo secreto que
	   la conduce a otra casa tan parecida a la suya que resulta escalofriante. Sin embargo, hay ciertas diferencias que llaman su atención: la 
	   comida es más rica, los juguetes son tan desconocidos como maravillosos y, sobre todo, hay otra madre y otro padre que quieren que Coraline
	   se quede con ellos, se convierta en su hija y no se marche nunca. Pronto Coraline se da cuenta de que, tras los espejos, hay otros niños que 
	   han caído en la trampa. Son como almas perdidas, y ahora ella es su única esperanza de salvación. Pero para rescatarlos tendrá también que
	   recuperar a sus verdaderos padres, y cumplir así el desafío que le permitirá volver a su vida anterior.', '2002-07-02', 8, 'https://covers.alibrate.com/b/59872e8dcba2bce50c1ab489/39baeac9-de71-4ca2-9f46-90d47af8a34e/share', 6);
SET IDENTITY_INSERT libro OFF;

