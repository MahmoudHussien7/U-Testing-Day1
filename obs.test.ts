    import { Observable } from "./obs";

    describe("Observable", () => {
    let observable: Observable<number>;
    let observer1: jest.Mock;
    let observer2: jest.Mock;

    beforeEach(() => {
        observable = new Observable<number>();
        observer1 = jest.fn();
        observer2 = jest.fn();
    });

    it("should notify all subscribed observers", () => {
        observable.subscribe(observer1);
        observable.subscribe(observer2);

        observable.notify(10);

        expect(observer1).toHaveBeenCalledWith(10);
        expect(observer2).toHaveBeenCalledWith(10);
    });

    it("should not notify unsubscribed observers", () => {
        observable.subscribe(observer1);
        observable.subscribe(observer2);

        observable.unsubscribe(observer1);

        observable.notify(20);

        expect(observer1).not.toHaveBeenCalled();
        expect(observer2).toHaveBeenCalledWith(20);
    });

    it("should allow observers to be subscribed multiple times", () => {
        observable.subscribe(observer1);
        observable.subscribe(observer1);

        observable.notify(20);

        expect(observer1).toHaveBeenCalledTimes(2);
    });
    });
