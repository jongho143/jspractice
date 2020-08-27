// 1. 함수에 a 값 넣으면 짝수, 홀수 판단하고 짝수면 true 반환 홀수면 false 반환하기
// 2. 함수에 빈 배열과 배열의 길이 넣으면 배열에 길이만큼 push하고 배열 반환하기 ex ) array, 10 => [0, 1,... 9]
// 3. 함수에 숫자, 제곱할 수 넣고 제곱한 결과 값 반환하기 power(num, 제곱할 수) 제곲 값 반환
// 4. 노트북 오브젝트 배열 만들고 name노트북은 price원 입니다. 출력하는데 price 1000원 이상일 때만 출력
// 5. 함수에 숫자 넣으면 1 ~ 10 까지 증가 값 더하기 ex) 1 넣으면 num + 1 + 2 + 3 + 4... + 10

//1번 문제
// Boolean 타입 이닥 Number 타입처럼 변수 선언해서 반환해도되고 Const result = true 아니면 바로 return true
// function print(a) {
//   if (a % 2 === 0) {
//     return true;
//   } else if (a % 2 === 1) {
//     return false;
//   }
// }
// console.log(print(2));
// console.log(print(1));

//2번 문제
// const array = [];

// for (let i = 0; i < 10; i++) {
//   array.push(i);
// }

// console.log(array);

//3번 문제

//4번 문제
// const StockArray = [
//   {
//     name: "대주전자재료",
//     price: 51000,
//   },
//   {
//     name: "애플",
//     price: 600000,
//   },
//   {
//     name: "삼성전자",
//     price: 55600,
//   },
//   {
//     name: "한국전력공사",
//     price: 230,
//   },
//   {
//     name: "마이크로소프트",
//     price: 300000,
//   },
//   {
//     name: "LG화학",
//     price: 300,
//   },
//   {
//     name: "카카오",
//     price: 410000,
//   },
//   {
//     name: "지엔원에너지",
//     price: 100,
//   },
// ];

// for (let i = 0; i < StockArray.length; i++) {
//   const Stock = StockArray[i];
//   const array = `${Stock.name}의 현재 가격은 ${Stock.price}원 입니다.`;
//   if (Stock.price >= 1000) {
//     console.log(array);
//   }
// }

//5번 문제
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }
