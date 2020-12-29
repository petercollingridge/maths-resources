export function shuffle(arr) {
    arr = arr.slice(0);
    for (let i = arr.length; i--; ) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
