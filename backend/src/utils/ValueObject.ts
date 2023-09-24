import { shallowEqual } from 'shallow-equal-object'

// 参考: https://blog.mamansoft.net/2020/02/19/express-value-object-by-typescript/
// 値オブジェクトのベースになる抽象クラス
export abstract class AbstractValueObject<T> {
  protected readonly _value: T

  protected constructor(_value: T) {
    this._value = Object.freeze(_value)
  }

  public equals(vo?: AbstractValueObject<T>): boolean {
    if (vo === null || vo === undefined) {
      return false
    }
    return shallowEqual(this._value, vo._value)
  }
}

// 値オブジェクトの抽象クラス
export abstract class PrimitiveValueObject<T> extends AbstractValueObject<T> {
  get value(): T {
    return this._value
  }
}

interface ValueObjectProps {
  [index: string]: any
}
// 値としてオブジェクトを持つ値オブジェクトの抽象クラス
export abstract class ValueObject<
  T extends ValueObjectProps,
> extends AbstractValueObject<T> {}
