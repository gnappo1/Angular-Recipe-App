export class Ingredient {
  //the accessor 'public' in front of the prop name
  // this will create the properties with the name and type specified
  // but also assign the values received in the constructor to the props
  constructor(public name: string, public amount: number) {}


  // Typical setup:

  // public name: string;
  // public amount: number;
  //
  // constructor(name: string, amount: number) {
  //   this.name = name;
  //   this.amount = amount;
  // }
};
