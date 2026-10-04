class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false

        const store = new Map<string, number>()

        for (const char of s) {
            if(store.has(char)) store.set(char, (store.get(char) ?? 0) + 1)
            else store.set(char, 1)
        }

        for (const char of t) {
            if(store.has(char)) store.set(char, (store.get(char) ?? 0) - 1)
            else store.set(char, -1)
        }

        for(const num of Array.from(store.values())) {
            if(num !== 0) return false
        }

        return true
    }
}
