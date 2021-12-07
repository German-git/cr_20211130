-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-12-2021 a las 22:50:43
-- Versión del servidor: 10.6.5-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gerfrzdiplomatura`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE `generos` (
  `id` int(10) UNSIGNED NOT NULL,
  `inactivo` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `nombre` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Volcado de datos para la tabla `generos`
--

INSERT INTO `generos` (`id`, `inactivo`, `nombre`) VALUES
(1, 0, 'RPG'),
(2, 0, 'Strategy'),
(3, 0, 'FPS'),
(4, 0, 'MMORPG'),
(5, 0, 'Survival horror'),
(6, 0, 'Fighting'),
(7, 0, 'Action - Adventure'),
(8, 0, 'Action - Stealth'),
(9, 0, 'Turn-based strategy, real-time tactics');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--

CREATE TABLE `juegos` (
  `id` int(10) UNSIGNED NOT NULL,
  `inactivo` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `nombre` varchar(256) NOT NULL,
  `id_genero` smallint(5) UNSIGNED NOT NULL,
  `gratis` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `valoracion` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `recomendado` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `nota` mediumtext DEFAULT NULL,
  `img_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Volcado de datos para la tabla `juegos`
--

INSERT INTO `juegos` (`id`, `inactivo`, `nombre`, `id_genero`, `gratis`, `valoracion`, `recomendado`, `nota`, `img_id`) VALUES
(1, 0, 'Total War: Warhammer 2', 9, 0, 5, 1, ' Cuando la gente sueña con qué franquicia de videojuegos encajaría bien con películas, juegos de mesa o similares, la combinación de Total War con Warhammer seguramente ocuparía un lugar destacado en muchas listas. Hace unos años, este sueño se hizo realidad, y el tren de Total War: Warhammer ha seguido adelante sin oposición desde entonces.\r\n\r\nTotal War: Warhammer 2 se acumula sobre el juego original si eres el propietario, lo que te permite combinar todas las facciones de ambos juegos en una súper campaña. Cada facción se siente completamente única para jugar, y ver a miles de ejércitos de Skaven, No-muertos, Hombres Lagarto, Caos y las otras facciones de los Grimdark atacar es un espectáculo para la vista. Varios otros juegos de Total War, como Three Kingdoms y Attila, también están disponibles en Linux. ', 'sgv2alvhrpqvpu6aofdf'),
(2, 0, 'Pillars of Eternity II: Deadfire', 1, 0, 5, 1, ' Uno de los títulos que mejor representa el resurgimiento de los cRPG de los últimos años hace que tu típico juego de rol de Bethesda parezca una fácil aventura de acción. La última entrada de la majestuosa serie Pillars of Eternity tiene un sesgo más bucanero mientras navegas con una tripulación por islas llenas de aventuras y peligros.\r\n\r\nAgregando combate naval a la mezcla, Deadfire continúa con la rica narración y la excelente escritura de su predecesor mientras se basa en esos hermosos gráficos y fondos pintados a mano del juego original. Este es un juego de rol profundo e incuestionablemente difícil que puede hacer que algunos lo rechacen, pero aquellos que lo adopten estarán absorbidos en su mundo durante meses. ', 'zlti8wiofl7ocl0bqlyu'),
(3, 0, 'Left 4 Dead 2', 3, 0, 4, 1, ' No es necesario guardar progresos, no hay rutina ni compromiso, es solo un juego que puedes jugar con algunos amigos, luego irte y no quedarte atrás en las cosas. Es tan sencillo que solo necesitas tomar un arma, apuntar y disparar. Con tan pocos juegos cooperativos existentes en la actualidad, especialmente tan pocos que permitan el modo cooperativo de 4 jugadores, Left 4 Dead 2 siempre tendrá poder de permanencia. Es una de las mejores opciones que tendrás para jugar con tus amigos.\r\n\r\nEl juego presenta pantanos, ciudades, cementerios y muchos más entornos para mantener las cosas interesantes y horribles. Las armas no son súper tecnológicas, pero brindan una experiencia realista considerando que es un juego antiguo. ', 'rh2daipxmlhdmztkzwiw'),
(4, 0, 'BioShock Infinite', 3, 0, 5, 0, '', 'j9ecl0rqthewnwlw3tky'),
(5, 0, 'CS Go', 3, 0, 4, 0, '', 'z7atdmbmna7q8wfubfbe'),
(6, 0, 'Champions of Regnum', 4, 1, 3, 0, '', 'jpjis5lc16djrjkpvrca'),
(7, 0, 'Skullgirls', 6, 0, 4, 0, '', 'wxdldw7x77km6w4fehmj'),
(8, 0, 'Alien Isolation', 5, 0, 5, 0, '', 'gcezp6wbuhcbdc2dk1me'),
(9, 0, '0 A.D.', 2, 1, 4, 0, '', 'daejy1w5fiadsjohy28o');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) UNSIGNED NOT NULL,
  `usuario` varchar(64) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `juegos`
--
ALTER TABLE `juegos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
