export type CountryFlag = string;
export type TimeFrame = `Since ${string}`|`Since ${string}, until ${string}`;

export interface Scientist {
	id: string;
	displayName: string;
	website: string;
	title: string;
	timeFrame: TimeFrame;
	flag: CountryFlag;
}
