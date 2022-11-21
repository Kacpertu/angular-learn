import { Component, Input } from '@angular/core';

@Component({
  selector: 'NIGGA',
  template: `<h1>Hello {{nazwa}}!</h1><p>JD</p>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() nazwa: string;
}
