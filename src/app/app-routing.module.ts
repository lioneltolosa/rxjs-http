import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UserComponent } from './views/user/user.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TableListComponent } from './views/table-list/table-list.component';
import { FilterComponent } from './views/filter/filter.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'filter-rxjs', component: FilterComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
