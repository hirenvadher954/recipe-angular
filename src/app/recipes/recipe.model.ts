export class Recipe {
  public name: string;
  public descriptions: string;
  public imagePath: string;

  constructor(name: string, descriptions: string, imagePath: string) {
    this.name = name;
    this.descriptions = descriptions;
    this.imagePath = imagePath;
  }
}
