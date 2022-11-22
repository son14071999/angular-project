import { AfterViewInit, Component } from '@angular/core';
import { Product } from './common/product'
import { Inventor } from './common/inventor'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.render(this.show)
  }
  product: Product = {
    name: 'Hat',
    quantity: 12,
    price: 200
  }

  inventors: Inventor[] = [
    {id:1, first: 'nguyen', last: 'son', year: 1999, passed: 2100},
    {id:2, first: 'nguyen', last: 'son', year: 1999, passed: 2100},
    {id:3, first: 'nguyen', last: 'son', year: 1999, passed: 2100},
  ]


  show(innerHTML: string) {
    let item = document.querySelector('#list')
    if(item) {
      item.innerHTML = innerHTML
    }
  }

  render(callback: (data: string) => any) {
    let innerHTML = this.inventors.map(item => {
      return `
      <tr>
          <td>${item.id}</td>
          <td>${item.first}</td>
          <td>${item.last}</td>
          <td>${item.year}</td>
          <td>${item.passed}</td>
      </tr>
      `
    }).join('')
    callback(innerHTML)
  }
}
