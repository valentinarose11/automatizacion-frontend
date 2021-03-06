import { InventarioComponent } from './pages/erp/inventario/inventario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ControlComponent } from './components/control/control.component';
import { ErpComponent } from './pages/erp/erp.component';
import { MateriaPrimaComponent } from './pages/erp/materia-prima/materia-prima.component';
import { MesComponent } from './pages/mes/mes.component';
import { OrdenPedidoComponent } from './pages/erp/orden-pedido/orden-pedido.component';
import { ParametrosReferenciasComponent } from './pages/erp/parametros-referencias/parametros-referencias.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { PagesComponent } from './pages/pages.component';
import { OrdenProduccionComponent } from './pages/mes/orden-produccion/orden-produccion.component';

const routes: Routes = [

  {
    path: '', component: PagesComponent,
    children: [
      {
        path: 'erp',
        component: ErpComponent,
        children: [
          {
            path: 'inventario',
            component: InventarioComponent
          },
          {
            path: 'materia-prima',
            component: MateriaPrimaComponent
          },
          {
            path: 'orden-pedido',
            component: OrdenPedidoComponent
          },
          {
            path: 'parametros-referencia',
            component: ParametrosReferenciasComponent
          },
          {
            path: '',
            redirectTo: 'materia-prima',
            pathMatch: 'full'
          }
        ]
      },
      {
        path:'mes',
        component: MesComponent,
        children: [
          {
            path: 'orden-produccion',
            component: OrdenProduccionComponent
          }

        ]
      },
      {
        path: '',
        redirectTo: 'erp',
        pathMatch: 'full'
      },
      { path: 'control', component: ControlComponent },
    ]
  },

  //Ruta para el login
  { path: 'login', component: LoginComponent },

  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
