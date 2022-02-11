// setting a type alias
type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};
  /**
   * Regisers an event handler with this obect, so other parts of the app know when sth chnages
   */
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  /**
   * Triggers an event to tell other parts of the app that sth has changed
   */
  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  };
}
