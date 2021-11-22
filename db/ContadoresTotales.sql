ALTER proc ContadoresTotales
@op int
as

if @op= 1 -- CONSULTA EXTERNA TOTAL ATENDIDOS
begin

selecT count(*) as contador from Atenciones where IdTipoServicio=1 and FechaEgreso is not null
and year(FechaIngreso)= YEAR(GETDATE()) 
end

if @op= 2 --EMERGENCIA TOTAL ATENDIDOS
begin

selecT count(*) as contador from Atenciones where IdTipoServicio=2 and FechaEgreso is not null
and year(FechaIngreso)= YEAR(GETDATE()) 
end

if @op= 3  --HOSPITALIADOS TOTAL ATENDIDOS
begin

selecT count(*) as contador from Atenciones where IdTipoServicio=3 and FechaEgreso is not null
and year(FechaIngreso)= YEAR(GETDATE()) 
end


if @op= 5  --HOSPITALIADOS  
begin

selecT count(*) as contador from Atenciones where IdTipoServicio=3 and FechaEgreso is  null
and idEstadoAtencion=1
end

if @op= 6  --EMERGENCIADOS  
begin

selecT count(*) as contador from Atenciones where IdTipoServicio=2 and FechaEgreso is  null
and idEstadoAtencion=1
end



if @op= 7  --CAMAS LIBRES  
begin
SELECt COUNT(*) as contador FROM Camas WHERE IdEstadoCama=1
AND IdPaciente IS NULL
end