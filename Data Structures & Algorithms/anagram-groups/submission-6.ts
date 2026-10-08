class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res = {}

        for(const char of strs) {
            const count = new Array(26).fill(0)

            for(const c of char) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            const key = count.join(',')

            if(!res[key]) res[key] = []

            res[key].push(char)
        }

        return Object.values(res)
    }
}
