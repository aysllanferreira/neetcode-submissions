class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length - t.length !== 0) return false

        const counts = new Map<string, number>()
        const charsS = [...s]
        const charsT = [...t]

        for (const char of charsS){
            counts.set(char, (counts.get(char) ?? 0) + 1)
        }

        for (const char of charsT) {
            counts.set(char, (counts.get(char) ?? 0) - 1)
            if(counts.get(char) < 0) return false
        }

        return true
    }
}
