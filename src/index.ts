function longest<T extends { length: number }>(first: T, second: T): T {
	return first.length > second.length ? first : second;
}
console.log('longest("a","ea7") :>> ', longest('a', 'ea7'));
console.log('longest([1],[1,2,3,4]) :>> ', longest([1], [1, 2, 3, 4]));
longest(1, 2);
