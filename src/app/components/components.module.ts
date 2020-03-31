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
import { OutputComponent } from './output/output.component';
import { CountryComponent } from './country/country.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

@NgModule({
    declarations: [
        SearchComponent,
        NavbarComponent,
        CardUserComponent,
        CardRepositoriesComponent,
        TableRepositoriesComponent,
        OutputComponent,
        CountryComponent,
        CustomersComponent,
        CustomersListComponent,
        FilterTextboxComponent,
        CapitalizePipe
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
        TableRepositoriesComponent,
        OutputComponent,
        CountryComponent,
        CustomersComponent,
        CustomersListComponent,
        FilterTextboxComponent,
        CapitalizePipe
    ]
})
export class ComponentsModule { }
