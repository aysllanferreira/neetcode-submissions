class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // BRUTE FORCE
        for(let i = 0; i < nums.length; i += 1) {
            const n = nums[i]

            for(let j = i + 1; j < nums.length; j += 1) {
                if(n === nums[j]) return true
            }
        }

        return false
    }
}
