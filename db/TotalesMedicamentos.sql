ALTER proc TotalesMedicamentos
as
SELECT distinct top 10
RTRIM(fb.Nombre) as Nombre,
fd.Cantidad

FROM
farmMovimiento f INNER JOIN farmMovimientoDetalle fd 
ON F.MovNumero=FD.MovNumero
INNER JOIN FactCatalogoBienesInsumos fb
ON FD.idProducto=FB.IdProducto
where year(f.fechaCreacion) = year(getdate())
and fb.TipoProducto=0
and f.idEstadoMovimiento=1
order by 2 desc