class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // Brute force
        const w1 = s.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').split(' ').join('')
        const w2 = w1.split('').reverse().join('')

        return w1 === w2 ? true : false

    }
}
