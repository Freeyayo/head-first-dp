{
abstract class Duck {
  public abstract display(): void;

  public fly() {
    console.log('duck fly');
  }

  public swim() {
    console.log('duck quack');
  }

  public quack() {
    console.log('duck quack');
  }
}

class RedHeadDuck extends Duck {
  display() {
    console.log('RedHeadDuck display');
  }
}

class RubberDuck extends Duck {
  display() {
    console.log('RubberDuck display');
  }
  // Rubber duck doesn't fly.
  // In this case, I have to modify all fly() of duck classes which can't fly.
  fly() {
    console.log('do nothing');
  }
}

const redHeadDuck = new RedHeadDuck();
const rubberDuck = new RubberDuck();

redHeadDuck.display();
redHeadDuck.fly();

rubberDuck.display();
rubberDuck.fly(); //do nothing
}