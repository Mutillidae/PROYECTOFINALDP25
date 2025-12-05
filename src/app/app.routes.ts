import { Routes } from '@angular/router';
import { Inicio } from './enlaces/inicio/inicio';
import { Producto } from './enlaces/producto/producto';
import { Formulario } from './enlaces/formulario/formulario';
import { Spacex } from './enlaces/spacex/spacex';





export const routes: Routes = [
    {path:"inicio", component: Inicio},
    {path:"producto", component: Producto},
    {path:"formulario", component: Formulario},
    {path:"spacex", component: Spacex}
    

];
