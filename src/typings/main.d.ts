declare module "*.jpg" {
    const value: any;
    export = value;
}

declare module "*.png" {
    const value: any;
    export = value;
}

declare module "*.gif" {
    const value: any;
    export = value;
}

declare module "*.svg" {
    const value: any;
    export = value;
}

declare module "*.scss" {
    const content: any;
    export = content;
}

interface GuestsList {
    [urlPath: string]: GuestMetadata;
}

interface GuestMetadata {
    name: string;
    id: string;
    pronoun: 'he' | 'she';
    plusOne?: GuestMetadata;
}