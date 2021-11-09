USE [SIGH]
GO
/****** Object:  StoredProcedure [dbo].[ReporteTipoConsulta_Graf_Meses]    Script Date: 06/11/2021 09:32:33 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ReporteTipoConsulta_Graf_Meses] --'2021-06-01','2021-06-15',3,0,''
@FechaIni DATE,
@FechaFin DATE,
@FF INT,
@IdEspecialidad INT,
@NroDocumento VARCHAR ( 100 ) AS BEGIN
	IF
		( @FechaIni = @FechaFin ) SELECT COUNT
		( * ) AS conteo,
		DATENAME( MONTH, a.FechaIngreso ) AS mes,
		MONTH ( a.FechaIngreso ) AS nmes 
	FROM
		Pacientes P
		INNER JOIN Atenciones A ON A.IdPaciente= P.IdPaciente
		INNER JOIN TiposServicio TS ON TS.IdTipoServicio= A.IdTipoServicio
		INNER JOIN Servicios Se ON Se.IdServicio= A.IdServicioEgreso
		INNER JOIN Especialidades Es ON Es.IdEspecialidad= Se.IdEspecialidad
		INNER JOIN TiposEdad TE ON TE.IdTipoEdad= A.IdTipoEdad
		INNER JOIN TiposSexo TSEX ON TSEX.IdTipoSexo= P.IdTipoSexo
		INNER JOIN medicos M ON M.IdMedico= A.idmedicoingreso
		INNER JOIN Empleados E ON E.IdEmpleado= M.IdEmpleado
		INNER JOIN FuentesFinanciamiento FF ON FF.IdFuenteFinanciamiento= A.idFuenteFinanciamiento 
	WHERE
		YEAR ( a.FechaIngreso ) = YEAR ( GETDATE( ) ) 
		AND ( A.idFuenteFinanciamiento=@FF OR @FF = 0 ) 
		AND ( SE.IdEspecialidad=@IdEspecialidad OR @IdEspecialidad = 0 ) 
		AND ( P.nrodocumento=@NroDocumento OR @NroDocumento = '' ) 
	GROUP BY
		DATENAME( MONTH, a.FechaIngreso ),
		MONTH ( a.FechaIngreso ) 
	ORDER BY
		nmes ASC;
	ELSE SELECT COUNT
		( * ) AS conteo,
		DATENAME( MONTH, a.FechaIngreso ) AS mes,
		MONTH ( a.FechaIngreso ) AS nmes 
	FROM
		Pacientes P
		INNER JOIN Atenciones A ON A.IdPaciente= P.IdPaciente
		INNER JOIN TiposServicio TS ON TS.IdTipoServicio= A.IdTipoServicio
		INNER JOIN Servicios Se ON Se.IdServicio= A.IdServicioEgreso
		INNER JOIN Especialidades Es ON Es.IdEspecialidad= Se.IdEspecialidad
		INNER JOIN TiposEdad TE ON TE.IdTipoEdad= A.IdTipoEdad
		INNER JOIN TiposSexo TSEX ON TSEX.IdTipoSexo= P.IdTipoSexo
		INNER JOIN medicos M ON M.IdMedico= A.idmedicoingreso
		INNER JOIN Empleados E ON E.IdEmpleado= M.IdEmpleado
		INNER JOIN FuentesFinanciamiento FF ON FF.IdFuenteFinanciamiento= A.idFuenteFinanciamiento 
	WHERE
		CONVERT ( DATE, a.FechaIngreso ) BETWEEN @FechaIni 
		AND @FechaFin 
		AND ( A.idFuenteFinanciamiento=@FF OR @FF = 0 ) 
		AND ( SE.IdEspecialidad=@IdEspecialidad OR @IdEspecialidad = 0 ) 
		AND ( P.nrodocumento=@NroDocumento OR @NroDocumento = '' ) 
	GROUP BY
		DATENAME( MONTH, a.FechaIngreso ),
		MONTH ( a.FechaIngreso ) 
	ORDER BY
		nmes ASC;
END