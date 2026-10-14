class Solution {
    /**
     * @param {string} char
     * @return {boolean}
     */
    private isAlphaNumerical(char: string): boolean {
        return (
            char >= 'a' && char <= 'z' ||
            char >= 'A' && char <= 'Z' ||
            char >= '0' && char <= '9'
        )
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0
        let r = s.length - 1

        while(l < r) {
            while(l < r && !this.isAlphaNumerical(s[l])) l += 1
            while(l < r && !this.isAlphaNumerical(s[r])) r -= 1

            if(s[l].toLowerCase() !== s[r].toLowerCase()) return false

            l += 1
            r -= 1
        }

        return true
    }
}
