import { Component, Input } from '@angular/core';

@Component({
  selector: 'clock-icon',
  templateUrl: './clock-icon.component.html',
  styleUrls: ['./clock-icon.component.scss']
})
export class ClockComponent {
    // The color of the icon
    @Input() color: string = 'black';
}
