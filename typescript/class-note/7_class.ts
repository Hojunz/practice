class Person {
  private name: string    
  public age: number
  readonly log: string  // 값을 읽기만 가능

  constructor(name: string, age: number) { 
    this.name = name
    this.age = age
  }
}