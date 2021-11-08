ALTER PROCEDURE ReporteTipoDiagnostico_Meses
@fechaini date,
@fechafin date,
@IdTipoSErvicio int,
@IdEspecialidad int,
@IdServicio int,
@IdDiagnsotico int,
@IdMedico int
as
if @IdTipoSErvicio = 2 or @IdTipoSErvicio=3
begin

selecT
	COUNT( * ) AS conteo,
	DATENAME( MONTH, Atenciones.FechaIngreso ) AS mes,
	MONTH ( Atenciones.FechaIngreso ) AS nmes
from Pacientes 
inner join Atenciones on pacientes.IdPaciente=Atenciones.IdPaciente
inner join AtencionesEstanciaHospitalaria on AtencionesEstanciaHospitalaria.IdAtencion=Atenciones.IdAtencion
inner join Servicios on Servicios.IdServicio=AtencionesEstanciaHospitalaria.IdServicio
inner join Especialidades on Especialidades.IdEspecialidad=Servicios.IdEspecialidad
inner join AtencionesDiagnosticos on AtencionesDiagnosticos.IdAtencion=Atenciones.IdAtencion
inner join Diagnosticos on Diagnosticos.IdDiagnostico=AtencionesDiagnosticos.IdDiagnostico
inner join  medicos on medicos.IdMedico=Atenciones.IdMedicoIngreso
where convert(date,Atenciones.FechaIngreso) between @fechaini  and @fechafin
and (Diagnosticos.iddiagnostico =@IdDiagnsotico)
and (atenciones.IdTipoServicio=@IdTipoServicio)
and (Especialidades.IdEspecialidad =@IdEspecialidad or @IdEspecialidad = 0)
and (Servicios.IdServicio = @IdServicio or @IdServicio = 0)
and (medicos.idmedico=@IdMedico or @IdMedico = 0)
GROUP BY
	DATENAME( MONTH, Atenciones.FechaIngreso ),
	MONTH ( Atenciones.FechaIngreso ) 
ORDER BY
	nmes ASC;
end

else
begin

selecT
	COUNT( * ) AS conteo,
	DATENAME( MONTH, Atenciones.FechaIngreso ) AS mes,
	MONTH ( Atenciones.FechaIngreso ) AS nmes 
from Pacientes 
inner join Atenciones on pacientes.IdPaciente=Atenciones.IdPaciente
inner join Servicios on Servicios.IdServicio=Atenciones.IdServicioIngreso
inner join Especialidades on Especialidades.IdEspecialidad=Servicios.IdEspecialidad
inner join AtencionesDiagnosticos on AtencionesDiagnosticos.IdAtencion=Atenciones.IdAtencion
inner join Diagnosticos on Diagnosticos.IdDiagnostico=AtencionesDiagnosticos.IdDiagnostico
inner join  medicos on medicos.IdMedico=Atenciones.IdMedicoIngreso
where convert(date,Atenciones.FechaIngreso) between @fechaini  and @fechafin
and (Diagnosticos.IdDiagnostico =@IdDiagnsotico)
and (Atenciones.IdTipoServicio=@IdTipoServicio)
and (Especialidades.IdEspecialidad =@IdEspecialidad or @IdEspecialidad = 0)
and (Servicios.IdServicio = @IdServicio or @IdServicio = 0)
and (medicos.idmedico=@IdMedico or @IdMedico = 0)
GROUP BY
	DATENAME( MONTH, Atenciones.FechaIngreso ),
	MONTH ( Atenciones.FechaIngreso ) 
ORDER BY
	nmes ASC;
end