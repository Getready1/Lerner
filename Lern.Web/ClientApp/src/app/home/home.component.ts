import { Component, OnInit } from '@angular/core';
import { answersNumber } from '../common/constants';
import { Artikel, Noun } from '../common/types';
import { GetRanom } from '../common/functions';
import { ArtikelButtons } from './artikel-buttons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.words = [
      {
        text: "Leben",
        artikel: Artikel.das,
        rightAnswers: 0
      },
      {
        text: "Frau",
        artikel: Artikel.die,
        rightAnswers: 0
      },
      {
        text: "Rauch",
        artikel: Artikel.der,
        rightAnswers: 0
      }
    ]

    this.iterator = this.getNext()
    this.current = this.iterator.next().value
    this.lights = this.lightTheLights()
    this.showArtikel = false
  }
  lights: boolean[]
  words: Noun[]
  current: Noun
  counter: number = 0
  noMore: boolean
  iterator: IterableIterator<Noun>
  showArtikel: boolean
  buttons: ArtikelButtons = ArtikelButtons


  getArtikel(artikelId: number): string { return Artikel[artikelId] }

  artikelBtnClick = (btnId) => {
    if (this.current.artikel != btnId) {
      this.buttons.setFalse(btnId)
      this.current.rightAnswers = 0
      this.lights = this.lightTheLights()
    }
    else {
      this.handleRightAnswer()
      this.current.rightAnswers === answersNumber && this.finishWord(this.current.text)

      if (this.words.length) setTimeout(this.handleWordSwitch.bind(this), 800)
      else setTimeout(() => { this.noMore = true }, 800)
    }
  }

  handleRightAnswer() {
    this.current.rightAnswers++;
    this.showArtikel = true;
    this.lights = this.lightTheLights()
  }
  handleWordSwitch() {
    this.current = this.iterator.next().value
    this.lights = this.lightTheLights()
    this.buttons.reset()
    this.showArtikel = false;
  }

  finishWord(word) {
    this.words = this.words.filter(w => w.text !== word)
    this.counter++;
  }



  *getNext() {
    let c: number = 0
    while (c < this.words.length) {
      yield this.words[GetRanom(this.words.length)];
    }
  }

  lightTheLights() {
    var x = Array(answersNumber).fill(false);

    for (var i = 0; i < this.current.rightAnswers; i++) {
      x[i] = true;
    }

    return x;
  }
}