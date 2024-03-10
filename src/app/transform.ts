export default function tranformation(inputText:string) {
    let inputArray = inputText.split("\n");
    // let dictionary:Array<string> = [];
    let dictionary: Record<string, boolean> = {};

    return inputArray.sort((a,b) => b < a ? 1 : -1 ).map((el) => {
        let removeComma = el.replaceAll(',', '').trim();
        let hasWhitespace = removeComma.indexOf(' ') > 0;

        if (hasWhitespace) {
            let containsWord = removeComma.split(" ").some((word) => dictionary[word]);
            
            return containsWord ? null : `"${removeComma}"`;
        } else {
            dictionary[removeComma] = true;
            return removeComma;
        }
    }).filter((word) => word != null).join(',');

    return inputText;
}