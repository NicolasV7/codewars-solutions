class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this._contents = contents;
    this._currentLine = 0;
    this._currentChar = 0;
  }

  get fullName() {
    return this._fullName;
  }

  get filename() {
    const parts = this._fullName.split(".");
    parts.pop();
    return parts.join(".");
  }

  get extension() {
    const parts = this._fullName.split(".");
    return parts.pop();
  }

  getContents() {
    return this._contents;
  }

  write(str) {
    this._contents += (this._contents ? "\n" : "") + str;
  }

  gets() {
    const contentLines = this._contents.split("\n");
    const lineResult = contentLines[this._currentLine++];
    return lineResult;
  }

  getc() {
    const contentChars = this._contents.split("");
    const charResult = contentChars[this._currentChar++];
    return charResult;
  }
}

