CREATE PROCEDURE ReporteTipoConsulta_Graf_Especialidades
@FechaIni DATE,
@FechaFin DATE,
@FF INT,
@IdEspecialidad INT,
@NroDocumento VARCHAR ( 100 ) AS BEGIN
	IF
		( @FechaIni = @FechaFin ) SELECT COUNT
		( * ) AS conteo,
		Es.Nombre 
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
		Es.IdEspecialidad,Es.Nombre
		ORDER BY conteo DESC
		OFFSET 0 ROWS
		FETCH FIRST 15 ROWS ONLY;
	ELSE SELECT COUNT
		( * ) AS conteo,
		Es.Nombre 
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
		Es.IdEspecialidad,Es.Nombre
		ORDER BY conteo DESC;
END