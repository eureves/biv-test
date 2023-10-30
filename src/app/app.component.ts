import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routesForTabs } from './routes/routes'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatTabsModule, CommonModule, RouterModule],
  template: `
  <main>
    <nav mat-tab-nav-bar class="navigation" backgroundColor="primary" mat-stretch-tabs="false" [tabPanel]="tabPanel">
      <a mat-tab-link *ngFor="let link of links"
        [routerLink]="link.path"
        routerLinkActive #rla="routerLinkActive"
        [routerLinkActiveOptions]="{ exact: true }"
        [active]="rla.isActive"
      > 
        {{ link.title }} 
      </a>
    </nav>
    <section class="container">
      <mat-tab-nav-panel #tabPanel >
        <router-outlet></router-outlet>
      </mat-tab-nav-panel>
    </section>
  </main>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'biv-test';
  links = routesForTabs
}
