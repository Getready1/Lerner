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

    this.iterator = this.getNext(this.words)
    this.current = this.iterator.next().value
  }
  words: Noun[]
  current: Noun
  counter:number = 0
  noMore: boolean
  iterator: IterableIterator<Noun>

  artikelBtnClick = ($event) => {
    const temp: IteratorResult<Noun> = this.iterator.next();

    if(temp.done){
      this.noMore = true
    }else{
      this.current = temp.value
      this.counter++
    }
  }

  *getNext(words: Noun[]) {
    let c: number = 0
    while(c < words.length){
      yield words[c++];
    }
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
