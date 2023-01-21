
interface SocialI {
    name: string,
    url: string
};

interface LanguageI {
    name: string,
    certificateUrl: string
};

export interface UserRequestI {
    _id: any,
    email: string,
    password: string,
    name: string,
    lastName: string,
    location?: string,
    description?: string,
    socialNetworks?: SocialI[],
    languages?: LanguageI[],
    technicalSkills?: string[],
    softSkills?: string[],
    otherSkills?: string[],
    background?: string,
    cv?: string,
    showInTable?: boolean
};

export interface UserResponseI extends UserRequestI{};