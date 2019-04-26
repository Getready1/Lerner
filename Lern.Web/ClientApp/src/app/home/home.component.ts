import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.words = [
      {
        text: "Leben",
        artikel: Artikel.das
      },
      {
        text: "Frau",
        artikel: Artikel.die
      },
      {
        text: "Rauch",
        artikel: Artikel.der
      }
    ]

    this.current = this.words[0]
  }
  words: Noun[]
  current: Noun
  counter:number = 0
  noMore: boolean

  artikelBtnClick = ($event) => {
    const temp: Noun = this.getNext().next().value
    if(temp) this.current = temp
    else this.noMore = true
  }

  *getNext(){
    yield this.words[++this.counter];
  }
}

interface Noun {
  text: string,
  artikel: Artikel
}

enum Artikel {
  der = 1,
  die,
  das
}
