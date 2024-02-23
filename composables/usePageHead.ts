export interface UsePageHeadOptions {
	title: string;
	description: string;
}

export const usePageHead = ({
	title,
	description
}: UsePageHeadOptions) => {
	useHead({
		title,
		meta: [{
			name: "description",
			content: description
		}]
	});
};
