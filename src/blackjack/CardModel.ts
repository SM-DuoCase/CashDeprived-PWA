enum CardType {
    Spades,
    Hearts,
    Clovers,
    Diamonds
}

type Card = {
    symbol: string;
    type: number;
    value: number;
    flipped: boolean;
}

export type {Card}
export {CardType}