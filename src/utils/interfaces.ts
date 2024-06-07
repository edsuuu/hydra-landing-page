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
    id: number;
    title: string;
    textOne: string;
    textTwo: string;
}
