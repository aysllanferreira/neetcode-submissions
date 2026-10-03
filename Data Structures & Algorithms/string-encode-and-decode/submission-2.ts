class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded: string = ""
        for(const str of strs) {
            const length = str.length

            encoded = encoded + `${length}#${str}`
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let i = 0
        const res: string[] = []

        while(i < str.length) {
            let j = i

            while(str[j] !== "#") {
                j += 1
            }

            const wordCount = +str.substring(i, j)
            i = j + 1
            j = i + wordCount
            res.push(str.substring(i,j))
            i = j
        }

        return res
    }
}
