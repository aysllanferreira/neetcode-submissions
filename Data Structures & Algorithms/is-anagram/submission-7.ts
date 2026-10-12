class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false
        
        const count = new Array(26).fill(0)

        for(let i = 0; i < s.length; i += 1) {
            count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            count[t[i].charCodeAt(0) - 'a'.charCodeAt(0)] -= 1
        }

        return count.every(val => val === 0)
    }
}
