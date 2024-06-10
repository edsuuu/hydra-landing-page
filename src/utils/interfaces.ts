export interface AboutProps {
    title: string;
    subTitle: string;
    paragraph: string;
}

export interface ButtonProps {
    text: string;
    onClick?: () => void;
    primary: boolean;
}

export interface CoverProps {
    alt: string;
    url: string;
}

export interface TitleProps {
    title: string;
    subTitle: string;
    imgArrow: string;
    paragraph: string;
}

export interface HomeProps {
    primaryTitleText: string;
    primaryColorText: string;
    secondaryTitleText: string;
    secondaryColorText: string;
    paragraphText: string;
}

export interface CardProps {
    title: string;
    textOne: string;
    textTwo: string;
}

export interface WhyBuildProps {
    title: string;
    paragraph: string;
    image: string;
    imageAlt: string;
}

export interface WhyBuildImageProps {
    url2: string;
    alt2: string;
}

export interface LineObjProps {
    url: string,
    alt: string
}


export interface BoxIntroductionContactHomeProps {
    icon: string;
    altIcon: string;
    title: string;
    text: string;
}
