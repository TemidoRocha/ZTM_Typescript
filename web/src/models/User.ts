import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// setting a type alias
type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  /**
   * Gets a single piece of info about this user (name, age)
   */
  get(propName: string): string | number {
    return this.data[propName];
  }

  /**
   * Changes information about this user (name, age)
   */
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  /**
   * Regisers an event handler with this obect, so other parts of the app know when sth chnages
   */
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  /**
   * Triggers an event to tell other parts of the app that sth has changed
   */
  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }

  /**
   * Fetches some data from the server about a particular user
   */
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  /**
   * Saves
   */
  save(): void {
    const id = this.get('id');
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users/', this.data);
    }
  }
}
