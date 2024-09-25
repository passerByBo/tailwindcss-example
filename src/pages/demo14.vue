<template>
  <div class="size-full"></div>
</template>
<script setup lang="ts">
import { pipe, flow, identity } from 'fp-ts/function';
import * as O from 'fp-ts/Option';
import * as E from 'fp-ts/Either';
import { makeMatch } from 'ts-adt/MakeADT';
import * as J from 'fp-ts/Json';
type Movie = Readonly<{
  title: string;
  releaseYear: number;
  ratingPosition: number;
  award?: string;
}>;

const movie1: Movie = {
  title: 'The Kingdom of Monads',
  releaseYear: 2023,
  ratingPosition: 1,
  award: 'Oscar'
};

const movie2: Movie = {
  title: 'natueal Transformations',
  releaseYear: 2023,
  ratingPosition: 3
};

const movie3: Movie = {
  title: 'Fun with for loops',
  releaseYear: 2023,
  ratingPosition: 74
};
const getMovieAwardHighlight = (movie: Movie): O.Option<string> =>
  pipe(
    movie.award, // string | undefined
    O.fromNullable, // O.some(number) | O.none
    O.map((award) => `Awarded with ${award}`) // Option<string>
  );

const getMovieTop10Highlight = (movie: Movie): O.Option<string> =>
  pipe(
    movie,
    O.fromPredicate(({ ratingPosition }) => ratingPosition <= 10), // Option<Movie>
    O.map(({ ratingPosition }) => `In Top 10 at position: ${ratingPosition}`) // Option<string>
  );

const getMovieHighlight = (movie: Movie): string =>
  pipe(
    movie,
    getMovieAwardHighlight, // Option<string>
    // 只有接受到O.none的时候才会继续函数
    // 这里就需要使用到O.alt(f) alternative computation
    O.alt(() => getMovieTop10Highlight(movie)), // Option<string>
    // else 对Option进行了取值
    O.getOrElse(() => `Released in ${movie.releaseYear}`)
  );

const rm1 = getMovieHighlight(movie1);
const rm2 = getMovieHighlight(movie2);
const rm3 = getMovieHighlight(movie3);

// 表单校验
type Email = Readonly<{
  type: 'Email';
  value: string;
}>;

type PhoneNumber = Readonly<{
  type: 'PhoneNumber';
  value: string;
}>;

type MalformedEmail = Readonly<{
  type: 'MalformedEmail';
  error: Error;
}>;

type NotAnEmail = Readonly<{
  type: 'NotAnEmail';
  error: Error;
}>;

type InvalidPhoneNumber = Readonly<{
  type: 'InvalidPhoneNumber';
  error: Error;
}>;
class PhoneNumberValidator {
  private phoneNumberRegex: RegExp;

  constructor() {
    // 正则表达式匹配常见的电话号码格式，包括国际格式和本地格式
    this.phoneNumberRegex =
      /^(?:(?:\+|00)([1-9]\d{0,2}))?[\s-]?\(?(?:0?[1-9]\d{1,4}\)?[\s-]?)?\d{3,4}[\s-]?\d{3,4}$/;
  }

  // 测试给定的字符串是否符合电话号码格式
  test(phoneNumber: string): boolean {
    return this.phoneNumberRegex.test(phoneNumber);
  }
}
class EmailValidator {
  private emailRegex: RegExp;

  constructor() {
    // 正则表达式匹配电子邮件地址
    this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  }

  // 测试给定的字符串是否符合电子邮件格式
  test(email: string): boolean {
    return this.emailRegex.test(email);
  }
}

const emailRegex = new EmailValidator();
const phoneNumberRegex = new PhoneNumberValidator();
const validateEmail = flow(
  E.fromPredicate(
    (maybeEmail: string) => emailRegex.test(maybeEmail),
    (invalidEmail): MalformedEmail | NotAnEmail =>
      invalidEmail.includes('@')
        ? { type: 'MalformedEmail', error: new Error('MalformedEmail email!') }
        : { type: 'NotAnEmail', error: new Error('not an email!') }
  ),
  E.map(
    (email): Email => ({
      type: 'Email',
      value: email
    })
  )
);

const valitePhoneNumber = flow(
  E.fromPredicate(
    (maybePhoneNumber: string) => phoneNumberRegex.test(maybePhoneNumber),
    (): InvalidPhoneNumber => ({
      type: 'InvalidPhoneNumber',
      error: new Error('Invalid Phone Number')
    })
  ),
  E.map(
    (phoneNumber): PhoneNumber => ({
      type: 'PhoneNumber',
      value: phoneNumber
    })
  )
);

const validateLoginName = (loginName: string) =>
  pipe(
    loginName,
    validateEmail, // E.Either<'MalformedEmail' | 'NotAnEmail', Email>
    // if Left<'NotAnEmail'> -> validatePhoneNumber
    E.orElseW(
      (e): E.Either<InvalidPhoneNumber | MalformedEmail, PhoneNumber> =>
        e.type === 'NotAnEmail' ? valitePhoneNumber(loginName) : E.left(e)
    ) // Either<'MalformedEmail' | 'InvalidPhoneNumber', Email | PhoneNumber>
  );

const r1 = validateLoginName('123@xx.com');
const r2 = validateLoginName('1231111111');
const r3 = validateLoginName('123@xx');
</script>
