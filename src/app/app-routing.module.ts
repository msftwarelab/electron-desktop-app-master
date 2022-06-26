import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TuktukComponent} from './components/tuktuk/tuktuk.component';
import {LanguageComponent} from './components/language/language.component';
import {EcranVeilleComponent} from './components/ecran-veille/ecran-veille.component';
import {TuktukESComponent} from "./components/tukuk.es/tuktuk.component";
import {TuktukFRComponent} from "./components/tuktuk.FR/tuktuk.component";
import {PrintingComponent} from "./components/printing/printing.component";

const routes: Routes = [
  {path: '', redirectTo: 'ecranVeille', pathMatch: 'full'},
  {path: 'tuktuk', component: TuktukComponent},
  {path: 'tuktukes', component: TuktukESComponent},
  {path: 'tuktukfr', component: TuktukFRComponent},
  {path: 'language', component: LanguageComponent},
  {path: 'ecranVeille', component: EcranVeilleComponent},
  {path: 'print', component: PrintingComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
