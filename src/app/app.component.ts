import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'grid';

  ngOnInit(): void {
    this.drawImageOnCanvas();
    // this.drawImageOnCanvas2();
  }

  drawImageOnCanvas() {
    let c: any = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    let img = document.getElementById('scream');
    ctx.drawImage(img, 10, 10);
  }

  drawImageOnCanvas2() {
    let c: any = document.getElementById('myCanvas2');
    let ctx = c.getContext('2d');
    let img2 = document.getElementById('scream2');
    ctx.drawImage(img2, 90, 50);
  }
}
