class Cube {
  constructor(length) {
    this._length = length; // Using underscore convention for private variable
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (value > 0) {
      this._length = value;
    } else {
      console.log("Length must be a positive value.");
    }
  }

  get surfaceArea() {
    return 6 * Math.pow(this._length, 2);
  }

  set surfaceArea(value) {
    if (value > 0) {
      this._length = Math.sqrt(value / 6);
    } else {
      console.log("Surface area must be a positive value.");
    }
  }

  get volume() {
    return Math.pow(this._length, 3);
  }

  set volume(value) {
    if (value > 0) {
      this._length = Math.pow(value, 1 / 3);
    } else {
      console.log("Volume must be a positive value.");
    }
  }
}

