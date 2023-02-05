interface Observer {
  update: (data: any) => void;
}

interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (obserber: Observer) => void;
  notify: (data: any) => void;
}

class BitcoinPrice implements Subject {
  observers: Observer[] = [];

  constructor() {
    const element: HTMLInputElement = document.querySelector("#value") as HTMLInputElement;
    element.addEventListener('input', () => {
      this.notify(element.value)
    })
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(obserber: Observer) {
    const index = this.observers.findIndex(obs => {
      return obs === obserber;
    })
    this.observers.splice(index, 1);
  }

  notify(data: any) {
    this.observers.forEach(observer => {
      observer.update(data);
    });
  }
}

class PriceDisplay implements Observer {
  private element: HTMLElement;

  constructor() {
    this.element = document.querySelector("#price") as HTMLElement;
  }
  update(data: any) {
    this.element.innerText = data;
  }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);
setTimeout(() => value.unsubscribe(display), 5000);