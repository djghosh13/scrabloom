class Transformation {
  constructor(transformation, description) {
    this.transformation = transformation;
    this.description = description;
    this.tiles = [];
  }

  addTile(tile) {
    if (this.tiles.length < this.transformation.length - 1) {
      this.tiles = this.tiles + [tile];
    } else {
      alert("cannot put more tiles!");
    }
  }
}

const transformations = {
  LETTER_TO_LETTER: new Transformation((word, a, b) => {
    return "";
  }, "Convert $1 to $2"),
};

export default transformations;
