class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // Check the first letter and last letter and compare, if they are equal, fine, otherwise false
        // Avoid Special Characters and check the letters in lower Characters

        let l = 0
        let r = s.length - 1

        while(l < r) {
            while(l < r && !this.isAlphaNumerical(s[l])) {
                l += 1
            }

            while(l < r && !this.isAlphaNumerical(s[r])) {
                r -= 1
            }

            if(s[l].toLowerCase() !== s[r].toLowerCase()) return false

            l += 1
            r -= 1
        }

        return true
    }

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
}
