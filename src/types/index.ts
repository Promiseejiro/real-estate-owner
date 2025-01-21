
export interface InvestmentProps {
	id: string;
	name: string;
	amount: number;
	imageUrl: string[];
	date: string;
	city: string;
	quantity: number;
	address: string;
	invioceId: string;
	investmentType: string;
	status: { active: boolean, text: string },
}

export interface InvioceDataType {
	invoiceNumber: any;
	id: string,
	name: string,
	description: string;
	price: number,
	date: string;
	initialDeposit: number,
	quantity: number,
	documentationFee: number,
	total: number,
	propertyType: string,
	media: string[
	],
	developerInfo: {
		name: string;
		address: string,
		phoneNumber: number;
		email: string;
		logo: string
	},
	realtorGroupInfo: {
		adminName: string;
		name: string;
		address: string,
		phoneNumber: number;
		email: string;
		logo: string
	},
	realtorInfo: {
		adminName: string;
		name: string;
		address: string,
		phoneNumber: number;
		email: string;
		logo: string
	},
	propertyData: {
		id: string,
		name: string
		description: string;
		price: string,
		initialDeposit: string,
		quantity: number,
		documentationFee: string,
		total: string,
		propertyType: string,
		media: string[
		],
		invoiceId: number
	},
}

export interface customerInvioce {
	name: string;
	email: string;
	phoneNumber: string;
	address: string;
	invoiceData: InvioceDataType[]
}

