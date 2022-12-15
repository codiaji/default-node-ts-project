function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
	if (d !== undefined && y !== undefined) {
		return new Date(y, mOrTimestamp, d);
	} else {
		return new Date(mOrTimestamp);
	}
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// If we uncomment the below code snippet, we'll get the following error:
// const d3 = makeDate(1, 3);
