{
  // Weather Station

  interface Observer {
    update: (temprature: number, humidity: number, pressure: number) => void;
  }

  interface Subject {
    registerObserver: (o: Observer) => void;
    removeObserver: (o: Observer) => void;
    notifyObserver: () => void;
  }

  interface displayElement {
    display: () => void;
  }

  class WeatherStation {}

  class WeatherData implements Subject {
    private observers: Observer[];
    private temprature: number;
    private humidity: number;
    private pressure: number;

    constructor() {
      this.observers = [];
    }

    registerObserver(o: Observer) {
      this.observers.push(o);
    }

    removeObserver(o: Observer) {
      const observer = o.constructor.name;
      const observerIndex = this.observers.findIndex(
        _observer => _observer.constructor.name === observer
      );
      this.observers.splice(observerIndex, 1);
    }

    notifyObserver() {
      for (const observer of this.observers) {
        observer.update(this.temprature, this.humidity, this.pressure);
      }
    }

    measurementsChanged() {
      this.notifyObserver();
    }

    setMeasurements(temprature: number, humidity: number, pressure: number) {
      this.temprature = temprature;
      this.humidity = humidity;
      this.pressure = pressure;
      this.measurementsChanged();
    }
  }

  class CurrentConditionsDisplay implements Observer, displayElement {
    private temprature: number;
    private humidity: number;
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
      this.weatherData = weatherData;
      weatherData.registerObserver(this);
    }

    update(temprature: number, humidity: number) {
      this.temprature = temprature;
      this.humidity = humidity;
      this.display();
    }

    display() {
      console.log(
        `temprature is ${this.temprature}, humidity is ${this.humidity}`
      );
    }
  }

  const weathearData = new WeatherData();
  const currentConditionsDisplay = new CurrentConditionsDisplay(weathearData);
  weathearData.setMeasurements(10, 200, 9.9);
  weathearData.removeObserver(currentConditionsDisplay);
  weathearData.setMeasurements(11, 300, 7.2);
}
