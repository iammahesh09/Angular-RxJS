import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RxjsComponent } from './rxjs/rxjs.component';
import { AppComponent } from './app.component';


const appRouters: Routes = [
    { path: '', component: AppComponent },
    { path: 'rxjs', component: RxjsComponent },
    { path: '**', redirectTo: '/' }
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRouters)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
