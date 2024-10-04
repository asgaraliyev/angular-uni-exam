import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { MenuListComponent } from '../components/menu-list/menu-list.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatRadioModule,
    FormsModule, ReactiveFormsModule, RouterOutlet,
    MatIconModule, MatToolbarModule,
    CommonModule, MenuListComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private router:Router){}
  ngOnInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // this.loading = true;
        this.sidenav.close()
      } else if (event instanceof NavigationEnd) {
        // this.loading = false;
      }
    });
  }
}
