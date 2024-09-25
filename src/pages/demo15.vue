<template>
  <div class="size-full bg-primary/20"></div>
</template>
<script lang="ts" setup>
import { HKT, Kind, Kind2, URIS, URIS2 } from 'fp-ts/HKT';

const increment = (x: number) => x + 1;
// --------------------------------- Maybe-----------------------------
// Maybe
type Option<A> = Some<A> | None;

interface Some<A> {
  _tag: 'Some';
  value: A;
}

interface None {
  _tag: 'None';
}

const some = <A,>(x: A): Option<A> => ({ _tag: 'Some', value: x });
const none: Option<never> = { _tag: 'None' };

const isNone = <A,>(x: Option<A>): x is None => x._tag === 'None';

// ----------------------------------------Either--------------------------------
// 异常的处理

type Either<E, A> = Left<E> | Right<A>;

interface Left<E> {
  _tag: 'Left';
  readonly left: E;
}

interface Right<A> {
  _tag: 'Right';
  readonly right: A;
}

const left = <E, A = never>(e: E): Either<E, A> => ({
  _tag: 'Left',
  left: e
});

const right = <A, E = never>(a: A): Either<E, A> => ({
  _tag: 'Right',
  right: a
});

const isLeft = <E, A>(x: Either<E, A>): x is Left<E> => x._tag === 'Left';

// -------------------------------------linked List-----------------------------------
interface Nil {
  readonly _tag: 'Nil';
}

interface Cons<A> {
  readonly _tag: 'Cons';
  readonly head: A;
  readonly tail: List<A>;
}

type List<A> = Nil | Cons<A>;

const nil: List<never> = { _tag: 'Nil' };

const cons = <A,>(head: A, tail: List<A>): List<A> => ({
  _tag: 'Cons',
  head,
  tail
});

const isNil = <A,>(xs: List<A>): xs is Nil => xs._tag === 'Nil';

// Option
type MatchOption = <A, B>(
  onNone: () => B,
  onSome: (a: A) => B
) => (x: Option<A>) => B;
const matchOption: MatchOption = (onNone, onSome) => (x) =>
  isNone(x) ? onNone() : onSome(x.value);

type MatchWOption = <A, B, C>(
  onNone: () => B,
  onSome: (a: A) => C
) => (x: Option<A>) => B | C;

const matchWOption: MatchWOption = (onNone, onSome) => (x) =>
  isNone(x) ? onNone() : onSome(x.value);

// Either

type MatchEither = <E, A, B>(
  onLeft: (e: E) => B,
  onRight: (a: A) => B
) => (x: Either<E, A>) => B;
const matchEither: MatchEither = (onLeft, onRight) => (x) =>
  isLeft(x) ? onLeft(x.left) : onRight(x.right);

// List
type MatchList = <A, B>(
  onNil: () => B,
  onCons: (head: A, tail: List<A>) => B
) => (xs: List<A>) => B;

const matchList: MatchList = (onNil, onCons) => (xs) =>
  isNil(xs) ? onNil() : onCons(xs.head, xs.tail);

// ---------------------------------Functor------------------------------------
// 函子
// 根据特性定义类别
// 两个类别之间的映射称为函子 F

// type map_option = <A, B>(f: A=>B) => Option<A> => Option<B>
// type map_list = <A, B>(f: A=> B) => List<A> => List<B>
// type map_either = <A, B, T>(f: A=> B) => Either<T, A> => Either<T, B>

// 对如上的map进行抽象
// interface Functor<F> {
//     map: <A,B,...>(F: A=>B) => F<...,A> => F<...Semigroup, B>
// }

// map Option
// 提取公共的映射关系
type MapOption = <A, B>(f: (x: A) => B) => (Fx: Option<A>) => Option<B>;

const map_option: MapOption = (f) =>
  matchOption(
    () => none,
    (value) => some(f(value))
  );

// list functor map

type MapList = <A, B>(f: (x: A) => B) => (Fx: List<A>) => List<B>;

const map_list: MapList = (f) =>
  matchList(
    () => nil,
    (head, tail) => cons(f(head), map_list(f)(tail))
  );

// Either functor map
type MapEither = <A, B, E>(
  f: (x: A) => B
) => (Fx: Either<E, A>) => Either<E, B>;
const map_either: MapEither = (f) =>
  matchEither(
    (e) => left(e),
    (value) => right(f(value))
  );

// 如上参数类型都比较类似 是否可以定义一个通用的map方法
// Option<A>
// List<A>
// Eigther<E, A>

// ------------------------------------Higher Order Function-------------------------------------------
// 函数作为参数或者返回值
// lambda简化
// 要处理的数据放到最后 抽取公共谓词函数 增加复用性
type Filter = <A>(f: (a: A) => boolean) => (as: A[]) => A[];

// ------------------类型的更高级抽象----------------------
// value universe 12 'hello' true
// type universe Integer  string  Integer=>Boolean Option<Boolean>
// kind Universe  Option    boolean->Option<boolean> Type->Type  Either:Type->Type->Type

// 对类型进行抽象
// Array<Integer>
// Array<Boolean>
// Array<String>
// 抽象为 Array<A> 使用泛型进行类型的抽象

// Array<Integer>
// List<Integer>
// Option<Integer>
// 抽象为F<Integer>  泛型类构造函数

// 这就是Higher Kinded Type
// 优先级从右到左

// type map_option = <A, B>(f: A=>B) => Option<A> => Option<B>
// type map_list = <A, B>(f: A=> B) => List<A> => List<B>
// type map_either = <A, B, T>(f: A=> B) => Either<T, A> => Either<T, B>

// 抽象为Functor<F> F为高阶类型变量

// Functor < F > {
//     map: <A, B>(f: A=>B) => F<A> => F<B>
// }

// -----------------------------TypeClass---------------------------------
// 函数式编程中强大的工具称为类型类

// Morphism 态射

// 在类的级别实现多态性
// polymorphism
// Poly which means many or multiply  多个
// Morphism which means form or shape  形状

// 参数多态性
function toString<A>(a: A) {
  return a + '';
}
// Ad-hoc polymorphism 临时多态性

interface Show<A> {
  toString: (a: A) => string;
}

// 定义的接口要想使用他 就需要实现对应的版本
const numShow: Show<number> = { toString: (a) => a.toString() };
const strShow: Show<string> = { toString: (a) => a };
const boolShow: Show<boolean> = { toString: (a) => (a ? 'Yes' : 'No') };

// 想要获得更高级别的抽象 不能从type层面思考 需要从kind层面思考

// show ----toString---> string
// Type Class 根据类型表现出的行为对类型进行分组和分类

//语法不支持
// typeclass Functor < F > {
//     map: (f: A=>B) => F<A> => F<B>
// }

// interface Functor<F> {
//     map: <A, B>(f: (a: A) => B) => (fa: F<A>) => F<B>
// }
// 无法将类型构造函数作为类型参数传递
// const OptionFunctor: Functor<Option> = {}

// Effect-ts 对更高级抽象实现更好
// 但是对于学习者来说 fp-ts 中的HKT接口就够用了  higher-kinded

// interface FunctorHKT<F> {
//     map: <A, B>(f: (a: A) => B) => (fa: HKT<F, A>) => HKT<F, A>
// }

// 不过还需要书写更多的模板代码 为每个Functor实例定义单独的接口

// 提供的类型增强实现方式
declare module 'fp-ts/HKT' {
  // 将我们需要添加自动的path 合并到URItoKind和URItoKind2 动态添加
  interface URItoKind<A> {
    List: List<A>;
    OptionM: Option<A>;
  }

  interface URItoKind2<E, A> {
    EitherM: Either<E, A>;
  }
}

interface Functor<F> {
  URI: F;
  map: <A, B>(f: (x: A) => B) => (fa: HKT<F, A>) => HKT<F, B>;
}

interface Functor1<F extends URIS> {
  URI: F;
  map: <A, B>(f: (a: A) => B) => (fa: Kind<F, A>) => Kind<F, B>;
}

interface Functor2<F extends URIS2> {
  URI: F;
  map: <E, A, B>(f: (a: A) => B) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>;
}

const optionFunctor: Functor1<'OptionM'> = {
  URI: 'OptionM',
  map: (f) =>
    matchOption(
      () => none,
      (a) => some(f(a))
    )
};

const ListFunctor: Functor1<'List'> = {
  URI: 'List',
  map: (f) =>
    matchList(
      () => nil,
      (head, tail) => cons(f(head), ListFunctor.map(f)(tail))
    )
};

const eitherFunctor: Functor2<'EitherM'> = {
  URI: 'EitherM',
  map: (f) =>
    matchEither(
      (e) => left(e),
      (a) => right(f(a))
    )
};

function lift<F extends URIS2>(
  F: Functor2<F>
): <E, A, B>(f: (x: A) => B) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>;
function lift<F extends URIS>(
  F: Functor1<F>
): <A, B>(f: (x: A) => B) => (fa: Kind<F, A>) => Kind<F, B>;
function lift<F>(
  F: Functor<F>
): <A, B>(f: (x: A) => B) => (fa: HKT<F, A>) => HKT<F, B>;
function lift<F>(
  F: Functor<F>
): <A, B>(f: (x: A) => B) => (fa: HKT<F, A>) => HKT<F, B> {
  return (f) => (fa) => F.map(f)(fa);
}

const liftIncrement = lift(optionFunctor)(increment);
const liftIncrement2 = lift(eitherFunctor)(increment);
const liftIncrement3 = lift(ListFunctor)(increment);

// --------------------------Functor Composition---------------------------
// 涵子组合  TaskEither

// import { List, cons, nil, isNil, functor as ListFunctor } from './lib/List';
// import { Option, some, none, isNone, functor as optionFunctor } from './lib/Option';

type Double = (x: number) => number;
const double: Double = (x) => x * 2;

const data1: Option<number> = some(12);
const output1 = optionFunctor.map(double)(data1);

console.log(output1);

type ComposeR = <A, B, C>(f: (a: A) => B, g: (b: B) => C) => (a: A) => C;
const composeR: ComposeR = (f, g) => (a) => g(f(a));

const data2: Option<List<number>> = some(cons(1, cons(2, cons(3, nil))));
const mapO = optionFunctor.map;
const mapL = ListFunctor.map;

// const output2 = mapO((xs: List<number>) => mapL(double)(xs))(data2)
// const output2 = mapO(mapL(double))(data2);
const output2 = composeR(mapL, mapO)(double)(data2);

declare module 'fp-ts/HKT' {
  interface URItoKind<A> {
    OptionList: Option<List<A>>;
  }
}

const optionListFunctor: Functor1<'OptionList'> = {
  map: composeR(mapL, mapO)
};

const output3 = optionListFunctor.map(double)(data2);
console.log(JSON.stringify(output3, null, 2));
</script>
