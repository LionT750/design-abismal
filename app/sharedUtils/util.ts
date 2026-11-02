
export function* arrayIterator<T>(arr: T[]) {
    while (arr.length > 0) {
        yield* arr;
    }
}