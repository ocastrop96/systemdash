ALTER proc [dbo].[TotalesMedicamentos]
@fini date,
@ffin date
as
SELECT distinct top 10
RTRIM(fb.Nombre) as Nombre,
fd.Cantidad

FROM
farmMovimiento f INNER JOIN farmMovimientoDetalle fd 
ON F.MovNumero=FD.MovNumero
INNER JOIN FactCatalogoBienesInsumos fb
ON FD.idProducto=FB.IdProducto
where fb.TipoProducto=0
and f.idEstadoMovimiento=1
and convert(date,f.fechaCreacion) between @fini and @ffin 
order by 2 desc