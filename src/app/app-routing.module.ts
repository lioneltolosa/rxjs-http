import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UserComponent } from './views/user/user.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TableListComponent } from './views/table-list/table-list.component';
import { FilterComponent } from './views/filter/filter.component';
import { InputOutputComponent } from './views/input-output/input-output.component';
import { ScrimbaListComponent } from './views/scrimba-list/scrimba-list.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'filter-rxjs', component: FilterComponent },
    { path: 'input-output', component: InputOutputComponent },
    { path: 'scrimba-list', component: ScrimbaListComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
