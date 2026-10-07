class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false

        const store = new Array(26).fill(0)

        for(let i = 0; i < s.length; i += 1) {
            store[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
            store[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
        }

        return store.every(val => val === 0)
    }
}
