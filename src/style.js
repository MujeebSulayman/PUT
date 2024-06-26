const styles = {
	boxWidth: 'xl:max-w-[1280px] w-full',

	heading2:
		'font-normal font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',
	heading3:
		'font-normal font-semibold xs:text-[35px] text-[21px] text-white xs:leading-[66.8px] leading-[56.8px] w-full',

	heading4:
		'font-normal font-semibold xs:text-[39px] text-[26px] text-white xs:leading-[66.8px] leading-[56.8px] w-full justity-center items-center',

	paragraph:
		'font-normal text-dimWhite text-[17px] leading-[30.8px]',

	paragraph2:
		'font-normal text-dimWhite text-[15px] leading-[30.8px]',

	flexCenter: 'flex justify-center items-center',
	flexStart: 'flex justify-center items-start',

	paddingX: 'sm:px-16 px-6',
	paddingY: 'sm:py-16 py-6',
	paddingY1: 'sm:py-8 py-10',
	padding: 'sm:px-16 px-6 sm:py-12 py-4',

	marginX: 'sm:mx-16 mx-6',
	marginY: 'sm:my-16 my-6',
};

export const layout = {
	section: `flex md:flex-row flex-col ${styles.paddingY}`,
	section1: `flex md:flex-row flex-col ${styles.paddingY1}`,
	sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

	sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
	sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

	sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
