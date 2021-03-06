export const types = {
  API: {
    ReferenciaProductos: "referencia-producto",
    MateriaPrimas: "materia-prima",
    recetas: "receta",
    TipoProductos: "tipo-producto",
    PresentacionProductos: "presentacion-producto",
    Prioridades: "prioridad",
    OrdenesProducciones: "orden-produccion",
    OrdenesPedidos: "orden-pedido",
    Inventario: "inventario"

  },
  MODULOS: [
    { 
      name: 'ERP',
      menus: [
        { path: '/erp/inventario', name: 'Inventario' },
        { path: '/erp/materia-prima', name: 'Materia Prima' },
        { path: '/erp/orden-pedido', name: 'Orden Pedido' },
        { path: '/erp/parametros-referencia', name: 'Parametros Referencia' }
      ]
    },
    {
      name: 'MES',
      menus: [
        { path: '/mes/orden-produccion', name: 'Orden produccion' },
      ]
    }
    
    
  ]

}