class Solution {
    /**
     * @param {string} char
     * @return {boolean}
     */
    isAlphaNumeric(char: string): boolean {
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

        while (r > l) {
            while ( l < r && !this.isAlphaNumeric(s[l])) {
                l += 1
            }

            while ( r > l && !this.isAlphaNumeric(s[r])) {
                r -= 1
            }

            if(s[l].toLowerCase() !== s[r].toLowerCase()) return false

            r -= 1
            l += 1
        }

        return true
    }
}
