import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router';
import { routeConfig } from './app/routes/routes';

bootstrapApplication(AppComponent, {
  providers: [provideAnimations(), provideRouter(routeConfig)]
})
  .catch(err => console.error(err));
