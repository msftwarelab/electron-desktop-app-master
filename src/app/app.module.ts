import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';
import {EcranVeilleComponent} from './components/ecran-veille/ecran-veille.component';
import {LanguageComponent} from './components/language/language.component';
import {TuktukComponent} from './components/tuktuk/tuktuk.component';

import {PaymentService} from './components/services/payment.service';
import {MdSelectModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdProgressSpinnerModule} from '@angular/material';
import { CovalentLayoutModule, CovalentStepsModule } from '@covalent/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';
import {MdProgressBarModule} from '@angular/material';
import {TuktukESComponent} from './components/tukuk.es/tuktuk.component';
import {TuktukFRComponent} from './components/tuktuk.FR/tuktuk.component';
import { PrintingComponent } from './components/printing/printing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TuktukComponent,
    TuktukESComponent,
    PrintingComponent,
    TuktukFRComponent,
    LanguageComponent,
    EcranVeilleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdSelectModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdProgressBarModule,
    MdListModule,
    MdDialogModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    CovalentStepsModule,
    CovalentLayoutModule,
    AppRoutingModule
  ],
  providers: [PaymentService, ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
