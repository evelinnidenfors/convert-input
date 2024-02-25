export default function Tranformation(inputText:string) {
    let inputArray = inputText.split("\n");

    return inputArray.map((el) => {
        let removeComma = el.replaceAll(',', '');
        let hasWhitespace = removeComma.indexOf(' ') > 0;

        if (hasWhitespace) {
            return `"${removeComma}"`;
        }

        return removeComma;
    }).join(',');

    return inputText;
}