import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './views/home/home.component';
import { UserComponent } from './views/user/user.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TableListComponent } from './views/table-list/table-list.component';
import { FilterComponent } from './views/filter/filter.component';
import { InputOutputComponent } from './views/input-output/input-output.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UserComponent,
        DashboardComponent,
        TableListComponent,
        FilterComponent,
        InputOutputComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
