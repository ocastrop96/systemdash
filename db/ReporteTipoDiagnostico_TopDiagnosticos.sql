ALTER PROCEDURE [dbo].[ReporteTipoDiagnostico_TopDiagnosticos] @fechaini DATE,
@fechafin DATE AS BEGIN
	SELECT COUNT
		( * ) AS conteo,
Diagnosticos.CodigoCIE10,
Diagnosticos.Descripcion
	FROM
		Pacientes
		INNER JOIN Atenciones ON pacientes.IdPaciente= Atenciones.IdPaciente
		--INNER JOIN AtencionesEstanciaHospitalaria ON AtencionesEstanciaHospitalaria.IdAtencion= Atenciones.IdAtencion
		INNER JOIN Servicios ON Servicios.IdServicio= Atenciones.IdServicioIngreso
		INNER JOIN Especialidades ON Especialidades.IdEspecialidad= Servicios.IdEspecialidad
		INNER JOIN AtencionesDiagnosticos ON AtencionesDiagnosticos.IdAtencion= Atenciones.IdAtencion
		INNER JOIN Diagnosticos ON Diagnosticos.IdDiagnostico= AtencionesDiagnosticos.IdDiagnostico
		INNER JOIN medicos ON medicos.IdMedico= Atenciones.IdMedicoIngreso 
	WHERE
		CONVERT ( DATE, Atenciones.FechaIngreso ) BETWEEN @fechaini 
		AND @fechafin 
	GROUP BY
		Diagnosticos.CodigoCIE10,
		Diagnosticos.Descripcion 
	ORDER BY
	conteo DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY 
END