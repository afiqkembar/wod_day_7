function input(limit) {
    var current = 2, prev = 1, next, sum = 0;
    do {
        next = current + prev;
        prev = current;
        current = next;
        sum += prev % 2 == 0 ? prev : 0;
    } while (prev < limit);

    document.write(sum);
}
input(1000)
