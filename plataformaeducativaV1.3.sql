-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-03-2022 a las 04:20:54
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `plataformaeducativa`
--
DROP DATABASE IF EXISTS `plataformaeducativa`;
CREATE DATABASE IF NOT EXISTS `plataformaeducativa` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `plataformaeducativa`;

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `AddAlumno` (`NombreP` VARCHAR(45), `PaternoP` VARCHAR(45), `MaternoP` VARCHAR(45), `CorreoP` VARCHAR(45), `ContraseniaP` VARCHAR(45))  BEGIN
	INSERT INTO Usuario(Nombre,Paterno,Materno,Correo,Contrasenia) VALUE(NombreP,PaternoP,MaternoP,CorreoP,ContraseniaP);
    INSERT INTO Alumno(Matricula) VALUE((SELECT MAX(idUsuario) FROM Usuario));
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `AddProfesor` (`NombreP` VARCHAR(45), `PaternoP` VARCHAR(45), `MaternoP` VARCHAR(45), `CorreoP` VARCHAR(45), `ContraseniaP` VARCHAR(45))  BEGIN
	INSERT INTO Usuario(Nombre,Paterno,Materno,Correo,Contrasenia) VALUE(NombreP,PaternoP,MaternoP,CorreoP,ContraseniaP);
    INSERT INTO Profesor(Matricula) VALUE((SELECT MAX(idUsuario) FROM Usuario));
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `Matricula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivocargado`
--

CREATE TABLE `archivocargado` (
  `idArchivoCargado` int(11) NOT NULL,
  `Archivo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivoguia`
--

CREATE TABLE `archivoguia` (
  `idArchivoGuia` int(11) NOT NULL,
  `Archivo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivoscargados`
--

CREATE TABLE `archivoscargados` (
  `idArchivoCargado` int(11) NOT NULL,
  `idTarea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivosguias`
--

CREATE TABLE `archivosguias` (
  `idArchivoGuia` int(11) NOT NULL,
  `idTarea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `curso`
--

CREATE TABLE `curso` (
  `NRC` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  `Profesor_Matricula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursoasignado`
--

CREATE TABLE `cursoasignado` (
  `Alumno_Matricula` int(11) NOT NULL,
  `Curso_NRC` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `Matricula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarea`
--

CREATE TABLE `tarea` (
  `idTarea` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Descripcion` varchar(45) NOT NULL,
  `NRC` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Paterno` varchar(45) NOT NULL,
  `Materno` varchar(45) NOT NULL,
  `Correo` varchar(45) NOT NULL,
  `Contrasenia` varchar(45) NOT NULL,
  `Perfil` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`Matricula`);

--
-- Indices de la tabla `archivocargado`
--
ALTER TABLE `archivocargado`
  ADD PRIMARY KEY (`idArchivoCargado`);

--
-- Indices de la tabla `archivoguia`
--
ALTER TABLE `archivoguia`
  ADD PRIMARY KEY (`idArchivoGuia`);

--
-- Indices de la tabla `archivoscargados`
--
ALTER TABLE `archivoscargados`
  ADD PRIMARY KEY (`idArchivoCargado`,`idTarea`),
  ADD KEY `fk_ArchivoCargado_has_Tarea_Tarea1` (`idTarea`);

--
-- Indices de la tabla `archivosguias`
--
ALTER TABLE `archivosguias`
  ADD PRIMARY KEY (`idArchivoGuia`,`idTarea`),
  ADD KEY `fk_ArchivoGuia_has_Tarea_Tarea1` (`idTarea`);

--
-- Indices de la tabla `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`NRC`,`Profesor_Matricula`),
  ADD KEY `fk_Curso_Profesor1` (`Profesor_Matricula`);

--
-- Indices de la tabla `cursoasignado`
--
ALTER TABLE `cursoasignado`
  ADD PRIMARY KEY (`Alumno_Matricula`,`Curso_NRC`),
  ADD KEY `fk_Alumno_has_Curso_Curso1` (`Curso_NRC`);

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`Matricula`);

--
-- Indices de la tabla `tarea`
--
ALTER TABLE `tarea`
  ADD PRIMARY KEY (`idTarea`),
  ADD KEY `fk_Tarea_Curso1` (`NRC`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `archivocargado`
--
ALTER TABLE `archivocargado`
  MODIFY `idArchivoCargado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `archivoguia`
--
ALTER TABLE `archivoguia`
  MODIFY `idArchivoGuia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tarea`
--
ALTER TABLE `tarea`
  MODIFY `idTarea` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `fk_Alumno_Usuario1` FOREIGN KEY (`Matricula`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `archivoscargados`
--
ALTER TABLE `archivoscargados`
  ADD CONSTRAINT `fk_ArchivoCargado_has_Tarea_ArchivoCargado1` FOREIGN KEY (`idArchivoCargado`) REFERENCES `archivocargado` (`idArchivoCargado`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_ArchivoCargado_has_Tarea_Tarea1` FOREIGN KEY (`idTarea`) REFERENCES `tarea` (`idTarea`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `archivosguias`
--
ALTER TABLE `archivosguias`
  ADD CONSTRAINT `fk_ArchivoGuia_has_Tarea_ArchivoGuia1` FOREIGN KEY (`idArchivoGuia`) REFERENCES `archivoguia` (`idArchivoGuia`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_ArchivoGuia_has_Tarea_Tarea1` FOREIGN KEY (`idTarea`) REFERENCES `tarea` (`idTarea`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `curso`
--
ALTER TABLE `curso`
  ADD CONSTRAINT `fk_Curso_Profesor1` FOREIGN KEY (`Profesor_Matricula`) REFERENCES `profesor` (`Matricula`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `cursoasignado`
--
ALTER TABLE `cursoasignado`
  ADD CONSTRAINT `fk_Alumno_has_Curso_Alumno1` FOREIGN KEY (`Alumno_Matricula`) REFERENCES `alumno` (`Matricula`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Alumno_has_Curso_Curso1` FOREIGN KEY (`Curso_NRC`) REFERENCES `curso` (`NRC`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD CONSTRAINT `fk_Profesor_Usuario1` FOREIGN KEY (`Matricula`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tarea`
--
ALTER TABLE `tarea`
  ADD CONSTRAINT `fk_Tarea_Curso1` FOREIGN KEY (`NRC`) REFERENCES `curso` (`NRC`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
