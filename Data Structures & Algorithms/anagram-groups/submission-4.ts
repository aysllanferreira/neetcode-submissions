class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // act -> [act, cat], opst -> [pots, tops, stop], aht -> [hat]
        // [[act, cat], [pots, tops, stop], [hat]]

        const store = new Map<string, string[]>()

        for(const str of strs) {
            const order = str.split('').sort().join('')

            if(store.has(order)) store.get(order)!.push(str)
            else store.set(order, [str])
        }

        return Array.from(store.values())
    }
}
