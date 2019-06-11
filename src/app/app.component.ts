import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isHoverVisible = false;

  toggleHoverVisibility() {
    this.isHoverVisible = !this.isHoverVisible;
  }
}
