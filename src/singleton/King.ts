/**
 * Singleton class
 * Singleton 패턴은 특정 클래스의 인스턴스가 오직 한개만 존재하도록 보장하고, 이에 대한 전역적인 접근을 제공하는 패턴이다.
 * 이 패턴은 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고, 최초 생성 이후에 호출된 생성자는 최초 객체를 반환한다.
 * 이 패턴은 단 하나의 객체를 생성해야 하는 상황에 사용된다.
 */
export default class King {
  private constructor() {}

  private static instance: King | undefined
  static getInstance(): King {
    if (this.instance === undefined) {
      this.instance = new King()
    }

    return this.instance
  }

  sayHello(): void {
    console.log('Hello, I am the King!')
  }
}
