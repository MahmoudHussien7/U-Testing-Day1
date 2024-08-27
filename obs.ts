type Observer<Y> = (value: Y) => void;

class Observable<Y> {
  private observers: Observer<Y>[] = [];

  subscribe(observer: Observer<Y>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer<Y>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(value: Y): void {
    this.observers.forEach((observer) => observer(value));
  }
}

export { Observable, Observer };
