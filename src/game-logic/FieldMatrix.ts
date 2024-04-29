import { getRandomInteger } from '@src/game-logic/helpers';
import { Matrix } from '@src/game-logic/Matrix';

export type MovesType = 'up' | 'down' | 'left' | 'right';

interface IField {
  matrix: number[][];
  moveCounter: number;
  checkMove: (number:number) => null | MovesType;
  makeMove: (move:MovesType) => void;
  mixCells: ()=>void;
  checkWin: ()=>boolean;
  incrCounter: ()=>void;
  resetCounter: () => void;
}

class FieldMatrix implements IField {
  public matrix = new Matrix().matrix;

  public moveCounter = 0;

  incrCounter() {
    this.moveCounter += 1;
  }

  resetCounter() {
    this.moveCounter = 0;
  }

  checkMove(number:number) {
    for (let y = 0; y <= 3; y += 1) {
      for (let x = 0; x <= 3; x += 1) {
        if (this.matrix[y][x] === number) {
          if (this.matrix?.[y]?.[x + 1] === 0) {
            return 'right';
          }
          if (this.matrix?.[y]?.[x - 1] === 0) {
            return 'left';
          }
          if (this.matrix?.[y + 1]?.[x] === 0) {
            return 'down';
          }
          if (this.matrix?.[y - 1]?.[x] === 0) {
            return 'up';
          }
        }
      }
    }
    return null;
  }

  makeMove(move: MovesType) {
    for (let y = 0; y <= 3; y += 1) {
      for (let x = 0; x <= 3; x += 1) {
        if (this.matrix[y][x] === 0) {
          if (move === 'up') {
            if (this.matrix?.[y + 1]?.[x]) {
              this.matrix[y][x] = this.matrix[y + 1][x];
              this.matrix[y + 1][x] = 0;
              this.incrCounter();
              return;
            }
          } else if (move === 'down') {
            if (this.matrix?.[y - 1]?.[x]) {
              this.matrix[y][x] = this.matrix[y - 1][x];
              this.matrix[y - 1][x] = 0;
              this.incrCounter();
              return;
            }
          } else if (move === 'left') {
            if (this.matrix?.[y]?.[x + 1]) {
              this.matrix[y][x] = this.matrix[y][x + 1];
              this.matrix[y][x + 1] = 0;
              this.incrCounter();
              return;
            }
          } else if (move === 'right') {
            if (this.matrix?.[y]?.[x - 1]) {
              this.matrix[y][x] = this.matrix[y][x - 1];
              this.matrix[y][x - 1] = 0;
              this.incrCounter();
              return;
            }
          }
        }
      }
    }
  }

  mixCells() {
    const moves: MovesType[] = ['up', 'down', 'left', 'right'];
    for (let i = 0; i < 1000; i += 1) {
      const move = moves[getRandomInteger(0, 3)];
      this.makeMove(move);
    }
    this.resetCounter();
  }

  checkWin() {
    return this.matrix.toString() === new Matrix().matrix.toString();
  }
}

export const fieldMatrix = new FieldMatrix();
