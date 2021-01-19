import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GetHelpComponent } from './get-help/get-help.component';
import { AcceptorComponent } from './acceptor/acceptor.component';
import { DonaterComponent } from './donater/donater.component';
import { ResultsComponent } from './results/results.component';

const routes:Routes = [
    { path: 'About-Us', component: AboutUsComponent},
    { path: 'Index', component: HomepageComponent},
    { path: '', component: HomepageComponent},
    { path: 'GetHelp', component: GetHelpComponent},
    { path: 'Accept-Blood', component: AcceptorComponent},
    { path: 'Donate-Blood', component: DonaterComponent},
    { path: 'Result', component: ResultsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AboutUsComponent, HomepageComponent, GetHelpComponent, AcceptorComponent, DonaterComponent, ResultsComponent ]