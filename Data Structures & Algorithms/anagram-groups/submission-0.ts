class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const mapper = new Map<string, string[]>()

        for(const word of strs){
            const sort = word.split('').sort().join('')
            if(mapper.has(sort)) mapper.get(sort)!.push(word)
            else mapper.set(sort, [word])
        }

        return Array.from(mapper.values())
    }
}
