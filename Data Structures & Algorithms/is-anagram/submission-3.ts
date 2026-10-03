class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false

        // return s.split('').sort().join('') === t.split('').sort().join('')

        // HASHMAP -> R -> 0 , A -> 0, C -> 0, E -> 0,

        const count = new Map<string, number>()

        // ADD THE LETTERS
        for (const char of s) {
            if(count.has(char)) count.set(char, (count.get(char) ?? 0 ) + 1)
            else count.set(char, 1)
        }

        // SUB THE LETTERS
        for (const char of t) {
            if(count.has(char)) count.set(char, (count.get(char) ?? 0 ) - 1)
            else count.set(char, -1)
        }

        // CHECK IF EVERYTHING IS 0
        for (const num of count.values()) {
            if(num !== 0) return false
        }

        return true
    }
}
