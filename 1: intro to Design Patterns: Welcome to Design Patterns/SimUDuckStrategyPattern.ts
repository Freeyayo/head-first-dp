{
  interface FlyBehavior {
    fly: () => void;
  }

  interface QuackBehavior {
    quack: () => void;
  }

  class FlyWithWings implements FlyBehavior {
    fly() {
      console.log('fly with wings');
    }
  }

  class FlyNoWay implements FlyBehavior {
    fly() {
      console.log("can't fly");
    }
  }

  class Quack implements QuackBehavior {
    quack() {
      console.log('quack quack!');
    }
  }

  class Squeak implements QuackBehavior {
    quack() {
      console.log(' Z -- -- !');
    }
  }

  class MuteQuack implements QuackBehavior {
    quack() {
      console.log('no sound');
    }
  }

  abstract class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    swim: void;
    display: void;

    performFlyBehavior() {
      this.flyBehavior.fly();
    }
    performQuackBehavior() {
      this.quackBehavior.quack();
    }

    setFlyBehavior(flyBehavior: FlyBehavior) {
      this.flyBehavior = flyBehavior;
    }
    setQuackBehavior(quackBehavior: QuackBehavior) {
      this.quackBehavior = quackBehavior;
    }
  }

  class MallardDuck extends Duck {
    constructor() {
      super();
      this.flyBehavior = new FlyWithWings();
      this.quackBehavior = new Quack();
    }
  }

  const mallardDuck = new MallardDuck();

  mallardDuck.performFlyBehavior();
  mallardDuck.performQuackBehavior();
  mallardDuck.setQuackBehavior(new Squeak());
  mallardDuck.performQuackBehavior();
}
