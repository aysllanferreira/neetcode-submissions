class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false
        const count = new Map<string, number>()

        for(const n of s) {
            count.set(n, (count.get(n) ?? 0) + 1)
        }

        for(const n of t) {
            count.set(n, (count.get(n) ?? 0) - 1)
        }

        for(const n of count.values()) {
            if (n != 0) return false
        }

        return true
    }
}
