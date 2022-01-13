import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule  } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";

import { ConnexionComponent } from "./connexion.component"

@NgModule({
  declarations: [
    ConnexionComponent
  ],
  imports: [
    CommonModule, // directive *ngFor *ngIf
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class ConnexionModule { }
// ng g m front/connexion/connexion