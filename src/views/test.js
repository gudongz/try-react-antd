function hello() {
    console.log(1111);
    const arr = [1, 2];
    for (let i in arr) {
        i += 1;
    }

    return i;
}


hello();