interface IAtributes {
    class: string;
    id: string;
    target: string;
}
export declare const convert: (input: string, link: string, attributes: IAtributes | null) => string;
declare const _default: {
    convert: (input: string, link: string, attributes: IAtributes | null) => string;
};
export default _default;
