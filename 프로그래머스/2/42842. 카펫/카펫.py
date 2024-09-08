def solution(brown, yellow):
    total = brown + yellow
    
    for w in range(3, total + 1):
        if total % w == 0:
            l = total // w
            if w >= l and (w - 2) * (l - 2) == yellow:
                return [w, l]
