class BitVector {
  constructor() {
    this.bitVector = [];
  }

  set(position, value) {
    let bitVectorIndx = Math.floor(position / 32);
    let mask = 1 << position % 32;

    if (value) {
      this.bitVector[bitVectorIndx] |= mask;
      return;
    }
    this.bitVector[bitVectorIndx] &= ~mask;
  }

  get(position) {
    let bitVectorIndx = Math.floor(position / 32);
    let mask = 1 << position % 32;
    let value = this.bitVector[bitVectorIndx] & mask;
    return Math.abs(value >> position % 32);
  }
}
