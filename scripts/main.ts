// 0: 밤, 1: 아침, 2: 오후
// 성능 문제도 있고 해서 그냥 Lookup Table로 구현
const lookup = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0];
switch (lookup[new Date().getHours()]) {
    case 0:
        document.querySelector('h1')!.innerText = "Good Night";
        break;

    case 1:
        document.querySelector('h1')!.innerText = "Good Morning";
        break;

    case 2:
        document.querySelector('h1')!.innerText = "Good Afternoon";
        break;
}