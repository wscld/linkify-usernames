import createHtmlElement from 'create-html-element';
const regex = () => (/\B@([a-z0-9](?:-?[a-z0-9]){0,38})/gi);

interface IAtributes {
    class: string,
    id: string,
    target: string
}

const linkifyUsername = (match: string, link: string, attributes: IAtributes | null) => {
    const username = match.replace(/^@/, '');
    const href = link + "/" + username;
    return createHtmlElement({
        name: "a",
        text: match,
        attributes: {
            ...attributes,
            href: href,
        }
    });
};

export const convert = (input: string, link: string, attributes: IAtributes | null) => {
    return input.replace(regex(), match => linkifyUsername(match, link, attributes));
}
export default { convert };
