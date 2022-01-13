import { NgModule } from '@angular/core';

import { environment } from "../../environments/environment";
import { AngularFireModule } from "@angular/fire/compat"
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ]
})
export class CoreModule { }
