export default function tranformation(inputText:string) {
    let inputArray = inputText.split("\n");

    return inputArray.map((el) => {
        let removeComma = el.replaceAll(',', '').trim();
        let hasWhitespace = removeComma.indexOf(' ') > 0;

        if (hasWhitespace) {
            return `"${removeComma}"`;
        }

        return removeComma;
    }).join(',');

    return inputText;
}