import { SimpleFormCompComponent } from './../learnComponents/simple-form-comp/simple-form-comp.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path: 'learn/formDrivent', component: SimpleFormCompComponent}
]

export const LearnRoutes = RouterModule.forChild(routes);