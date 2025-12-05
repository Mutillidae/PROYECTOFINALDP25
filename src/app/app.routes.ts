import { Routes } from '@angular/router';
import { Inicio } from './enlaces/inicio/inicio';
import { Producto } from './enlaces/producto/producto';
import { Formulario } from './enlaces/formulario/formulario';
import { Spacex } from './enlaces/spacex/spacex';
import { Inicio1 } from './enlaces/inicio1/inicio1';





export const routes: Routes = [
    {path:"inicio", component: Inicio},
    {path:"producto", component: Producto},
    {path:"formulario", component: Formulario},
    {path:"spacex", component: Spacex},
    {path:"inicio1", component: Inicio1}
    

];
