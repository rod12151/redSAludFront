import { Routes } from '@angular/router';
import { DashboardEstadisticaLayout } from './dashboard-estadistica-layout';
import { Dashboard } from '../../../features/dashboard/dashboard';
import { BarridoSBR } from '../../../features/dashboard/pages/barrido-sbr/barrido-sbr';
import { Profesionales } from '../../../features/dashboard/pages/profesionales/profesionales';
import { Digitadores } from '../../../features/dashboard/pages/digitadores/digitadores';
import { Morbilidad } from '../../../features/dashboard/pages/morbilidad/morbilidad';
import { Estrategias } from '../../../features/dashboard/pages/estrategias/estrategias';
import { ParalisisFlacida } from '../../../features/dashboard/pages/paralisis-flacida/paralisis-flacida';
import { ConvenioFED } from '../../../features/dashboard/pages/convenio-fed/convenio-fed';
import { Poblacion } from '../../../features/dashboard/pages/poblacion/poblacion';
import { ManualesHIS } from '../../../features/dashboard/pages/manuales-his/manuales-his';
import { Atenciones } from '../../../features/dashboard/pages/atenciones/atenciones';
import { Inconcistencias } from '../../../features/dashboard/pages/inconcistencias/inconcistencias';
import { Catalogos } from '../../../features/dashboard/pages/catalogos/catalogos';
import { Mortalidad } from '../../../features/dashboard/pages/mortalidad/mortalidad';

export const DASHBOARD_ESTADISTICA_LAYOUT_RUTES:Routes = [
    {path:'', component:DashboardEstadisticaLayout, children:[

        {path:'',component:Dashboard},
        {path:'barrido_SBR',component:BarridoSBR},
        {path:'profesionales',component:Profesionales},
        {path:'digitadores',component:Digitadores},
        {path:'morbilidad',component:Morbilidad},
        {path:'mortalidad',component:Mortalidad},
        {path:'estrategias',component:Estrategias},
        {path:'paralisis_flacida',component:ParalisisFlacida},
        {path:'convenio_FED',component:ConvenioFED},
        {path:'poblacion',component:Poblacion},
        {path:'manuales_HIS',component:ManualesHIS},
        {path:'atenciones',component:Atenciones},
        {path:'inconcistencias',component:Inconcistencias},
        {path:'catalogos',component:Catalogos},
        
        
    ]},]