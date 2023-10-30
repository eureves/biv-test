import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-template',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1 class="title">{{title}}</h1>
    <ng-content/>
  `,
  styleUrls: ['./page-template.component.scss']
})
export class PageTemplateComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  title: string = 'Page Title'

  constructor() {
    this.title = this.route.snapshot.data['pageTitle']
  }
}
