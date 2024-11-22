export declare function expectAssignable<T>(input: T): void;

// TODO: no clue if this is correct
export declare function expectNotAssignable<Expected, Actual = unknown>(
	input: Actual extends Expected ? never : Expected,
): void;
