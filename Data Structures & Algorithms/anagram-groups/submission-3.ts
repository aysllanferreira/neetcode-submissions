class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const store = new Map<string, string[]>

        for (const str of strs) {
            const sortedAnagram = str.split('').sort().join('')

            if(store.has(sortedAnagram)) store.get(sortedAnagram)!.push(str)
            else store.set(sortedAnagram, [str])
        }

        return Array.from(store.values())
    }
}
