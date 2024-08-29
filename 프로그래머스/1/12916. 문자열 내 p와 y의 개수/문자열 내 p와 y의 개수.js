function solution(s) {
    let p = s.toLowerCase().split('').filter(char => char === 'p').length;
    let y = s.toLowerCase().split('').filter(char => char === 'y').length;

    return p === y;
}
