import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { CardUserComponent } from './card-user/card-user.component';
import { CardRepositoriesComponent } from './card-repositories/card-repositories.component';
import { TableRepositoriesComponent } from './table-repositories/table-repositories.component';

@NgModule({
    declarations: [
        SearchComponent,
        NavbarComponent,
        CardUserComponent,
        CardRepositoriesComponent,
        TableRepositoriesComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ], exports: [
        SearchComponent,
        NavbarComponent,
        CardUserComponent,
        CardRepositoriesComponent,
        TableRepositoriesComponent
    ]
})
export class ComponentsModule { }
