// update the code with using interface,
// the problem is,
// this kind of rework destroys code reuse,
// such as fly(), quack() etc.
// and hard to maintain
{
  interface Flyable {
    fly: () => void;
  }

  interface Quackable {
    quack: () => void;
  }

  abstract class Duck {
    public abstract display(): void;

    public swim() {
      console.log('duck quack');
    }
  }

  class RedHeadDuck extends Duck implements Flyable, Quackable {
    display() {
      console.log('RedHeadDuck display');
    }

    fly() {
      console.log('RedHeadDuck duck fly');
    }

    quack() {
      console.log('RedHeadDuck duck quack');
    }
  }

  class RubberDuck extends Duck implements Quackable {
    display() {
      console.log('RubberDuck display');
    }

    quack() {
      console.log('RubberDuck duck quack');
    }
  }

  class FakeDuck extends Duck {
    display() {
      console.log('FakeDuck display');
    }
  }
}
