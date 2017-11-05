export class Location {
  id: number;
  address = '';
  hidden = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
