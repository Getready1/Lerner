import { Artikel } from "../common/types";
import { getNumberOfCurrencyDigits } from "@angular/common";

export const ArtikelButtons: ArtikelButtons = {
    der: {
        id: Artikel.der,
        text: Artikel[Artikel.der],
        isWrong: false,
        isDisabled: false
    },
    die: {
        id: Artikel.die,
        text: Artikel[Artikel.die],
        isWrong: false,
        isDisabled: false
    },
    das: {
        id: Artikel.das,
        text: Artikel[Artikel.das],
        isWrong: false,
        isDisabled: false
    },
    reset() {
        for (let e in Artikel) {
            if (isNaN(Number(e))) {
                this[e].text = e
                this[e].isWrong = false
                this[e].isDisabled = false
            }
        }
    },
    setFalse(btnId) {
        this.getById(btnId).text = 'falsch!';
        this.getById(btnId).isWrong = true;
    },
    getById(btnId){
        return this[Artikel[btnId]];
    },
    getArtikelKeys(){
        const result: string[] = []
        for (let artikel in Artikel) {
            if (isNaN(Number(artikel))) result.push(artikel)
        }
        return result;
    }
}

export interface ArtikelButtons {
    der: ArtikelButton,
    die: ArtikelButton,
    das: ArtikelButton,
    reset: VoidFunction,
    setFalse: (btnId: number) => void,
    getById: (btnId: number) => ArtikelButton,
    getArtikelKeys: () => string[]
}

interface ArtikelButton {
    id: number,
    text: string,
    isWrong: boolean,
    isDisabled: boolean
}