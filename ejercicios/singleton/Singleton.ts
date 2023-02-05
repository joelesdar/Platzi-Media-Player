class Singleton {
  private static singletonInstance: Singleton;

  private constructor() {
    // init
  }

  static getInstance() {
    if(!Singleton.singletonInstance) {
      Singleton.singletonInstance = new Singleton();
    }
    return Singleton.singletonInstance;
  }
}

export default Singleton;