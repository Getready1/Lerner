import { Artikel } from "../common/types";

export const ArtikelButtons: ArtikelButtons = {
    der: {
        id: Artikel.der,
        text: Artikel[Artikel.der],
        isWrong: false
    },
    die: {
        id: Artikel.die,
        text: Artikel[Artikel.die],
        isWrong: false
    },
    das: {
        id: Artikel.das,
        text: Artikel[Artikel.das],
        isWrong: false
    },
    reset() {
        for (let e in Artikel) {
            if (isNaN(Number(e))) {
                this[e].text = e
                this[e].isWrong = false
            }
        }
    },
    setFalse(btnId) {
        this[Artikel[btnId]].text = 'falsch!';
        this[Artikel[btnId]].isWrong = true;
    }
}

export interface ArtikelButtons {
    der: ArtikelButton,
    die: ArtikelButton,
    das: ArtikelButton,
    reset: VoidFunction,
    setFalse: (btnId: number) => void
}

interface ArtikelButton {
    id: number,
    text: string,
    isWrong: boolean
}