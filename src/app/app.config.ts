import { ApplicationConfig, EnvironmentInjector, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, ɵisEnvironmentProviders } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire/app';



import { routes } from './app.routes';
import { immediateProvider } from 'rxjs/internal/scheduler/immediateProvider';
import { firebaseConfig } from './Firebase/environment';


export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideRouter(routes, withHashLocation()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes, 
      withHashLocation()
    )
  ]
};
