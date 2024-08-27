function solution(array, height) {
    return array.filter(friend => friend > height).length
}