import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'orcamento', loadChildren: './forms/forms.module#FormsModule' }
        ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];
