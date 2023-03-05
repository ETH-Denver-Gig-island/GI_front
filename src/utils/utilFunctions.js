const UTILS = {
    summarizeString: (str) => {
        if (str.length <= 15) {
            return str;
        }
        const summary = str.slice(0, 5) + "......" + str.slice(-4);
        return summary;
    }
}