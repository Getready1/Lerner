import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Artikel } from '../types/types';

@Component({
  selector: 'app-noun-btn',
  templateUrl: './noun-btn.component.html',
  styleUrls: ['./noun-btn.component.css']
})
export class NounBtnComponent implements OnInit {
  btnState: NounState
  @Input() btnArtikel: Artikel
  @Input() btnClasses: string
  @Output() handleClickOutput = new EventEmitter<Artikel>()


  ngOnInit(): void {
    this.btnState = {
      text: Artikel[this.btnArtikel].toUpperCase(),
      classes: this.btnClasses
    }
  }

  artikelClicked = () => {
    this.handleClickOutput.emit(this.btnArtikel)
  }

}

interface NounState {
  text: string,
  classes: string
}