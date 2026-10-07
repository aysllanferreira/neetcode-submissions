class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // SET [1, 2, 3]
        // [1, 2, 3, 3]

        return new Set<number>(nums).size < nums.length
    }
}
