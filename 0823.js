// 1. for 문으로 1~10 까지 짝수만 찍기
// 2. for문으로 10~1 까지 홀수만 찍기
// 3. 피자 오브젝트 배열 만들기 (원소 10개, 오브젝트 key는 name과 price) pizza = [{}] 형태
// 4. 피자 배열 for문으로 처음부터 끝까지 "Key피자는 price원입니다" 찍기  ex) 도미노피자는 13000원입니다.
// 5. a 값을 넣으면 a * a 값을 리턴하는 함수 만들기 (제곱)
// 6. 숫자 넣는 input, 제곱 버튼 만들고 버튼 누르면 숫자의 제곱값 출력하기
// 7. Div, 버튼 만들고 버튼 누르면 Div 투명도(opacity) 1 부터 0까지 만들기, 시간은 3초동안 (애니메이션)

//1번 문제 복습
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//2번 문제 복습
// for (let i = 10; i >= 1; i--) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

//3번 문제 복습
// const PizzaArray = [
//   {
//     name: "포테이토",
//     price: "100",
//   },
//   {
//     name: "불고기",
//     price: "1000",
//   },
//   {
//     name: "그냥",
//     price: "1002",
//   },
//   {
//     name: "페퍼로니",
//     price: "1030",
//   },
//   {
//     name: "고구마",
//     price: "1020",
//   },
//   {
//     name: "소시지",
//     price: "1100",
//   },
//   {
//     name: "단호박",
//     price: "1400",
//   },
//   {
//     name: "파인애플",
//     price: "5100",
//   },
//   {
//     name: "애플",
//     price: "9100",
//   },
// ];

//4번 문제 복습
// for (let i = 0; i < PizzaArray.length; i++) {
//   const pizza = PizzaArray[i];
//   const menu = `${pizza.name} 피자는 ${pizza.price} 원 입니다.`;
//   console.log(menu);
// }

//5번 문제 복습
// function powerOfTwo(num) {
//   const power = num * num;
//   return power;
// }
// const result = powerOfTwo(3);
// console.log(result);

// 1번 문제
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 2번 문제
// for (let index = 10; index >= 1; index--) {
//   if (index % 2 === 1) {
//     console.log(index);
//   }
// }

// 3번 문제
// const pizzaArray = [
//   {
//     name: "a",
//     price: 0,
//   },
//   {
//     name: "b",
//     price: 100,
//   },
//   {
//     name: "c",
//     price: 200,
//   },
//   {
//     name: "d",
//     price: 300,
//   },
//   {
//     name: "e",
//     price: 500,
//   },
// ];

// 4번 문제
// for (let i = 0; i < pizzaArray.length; i++) {
//   const pizza = pizzaArray[i];
//   const menu = `${pizza.name} 피자는 ${pizza.price}원 입니다.`;
//   console.log(menu);
// }

// const numberArray = [5, 6, 7, 8];

// for (let i = 0; i < numberArray.length; i++) {
//   const number = numberArray[i];
//   console.log(number);
// }

// const name = "a";
// const price = 100;

// const a = `${name} 피자는 ${price}원 입니다.`;
// console.log(a);

// 오브젝트 키 값 가져오기 두가지 기억
// const a = {
//   name: "e",
//   price: 500,
// };
// const name = "name";
// console.log(a.name, a.price, a["name"], a[name]);

//5번 문제
// function powerOfTwo(num) {
//   const power = num * num;
//   return power;
// }
// const result = powerOfTwo(4);
// console.log(result);

// 함수에서 입력한 매개변수는 변수선언과 같다.
// function print(num) {
//   console.log(num);
// }

// print(1);
// 함수의 입장에서는 num = 1 같다.

// 함수 예제
// function divide(a, b) {
//   return a / b;
// }
// const result = divide(9, 3);
// console.log(result);

// const array = [];

// for (let i = 0; i < 100; i++) {
//   array.push(i);
// }

// console.log(array);

// function printArray(list) {
//   for (let i = 0; i < list.length; i++) {
//     console.log(list[i]);
//   }
// }

// printArray(array);

// let x = 0;
// x += 1;
// console.log(x);

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i += 2;
// }
