class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded: string = ""
        for(const str of strs) {
            encoded = encoded + `${str.length}#${str}`
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res: string[] = []
        let i = 0

        while(i < str.length) {
            let j = i
            while(str[j] !== '#') {
                j += 1
            }
            const length = +str.substring(i, j)
            i = j + 1
            j = i + length
            res.push(str.substring(i, j))
            i = j
        }
        return res
    }
}