export default function tranformation(inputText:string) {
    // let inputArray = inputText.replace(/,/g, "\n").replace(/\"|\“|\”/g, "").split("\n");
    let inputArray = inputText.replace(/,/g, "\n").replace(/\"|\“|\”|\~|\!|\@|\#|$|\£|\*|\(|\)|\_|\+|\=|\{|\}|\[|\]|\:|\;|\<|\>|\.|\&/g, "").replace(/  +/g, ' ').replace(/\“/g, "").split("\n");
    // let dictionary:Array<string> = [];
    let dictionary: Record<string, boolean> = {};

    return inputArray.sort((a,b) => {
        // Count spaces in each sentence
        const spacesA = (a.match(/\s/g) || []).length;
        const spacesB = (b.match(/\s/g) || []).length;
      
        // Compare based on the number of spaces
        return spacesA - spacesB;   
    }).map((el) => {
        let removedWhitespace = el.trim();
        let hasWhitespace = removedWhitespace.indexOf(' ') > 0;

        if (hasWhitespace) {
            let containsWord = removedWhitespace.split(" ").some((word) => dictionary[word]);
            
            return containsWord ? null : `"${removedWhitespace}"`;
        } else {
            dictionary[removedWhitespace] = true;
            return removedWhitespace;
        }
    }).filter((word) => word != null).join(',');

    return inputText;
}