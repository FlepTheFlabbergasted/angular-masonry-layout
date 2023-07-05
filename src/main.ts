import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, MatCardModule, MatButtonModule),
        provideAnimations()
    ]
}).catch(err => console.error(err));
