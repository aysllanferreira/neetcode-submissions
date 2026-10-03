class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let result: number = 0
        let sum: number = 0

        for (const num of nums) {
            if (num === 1) {
                sum += 1
                sum > result ? result = sum : 0
            }
            else {
                sum = 0
            }
        }

        return result
    }
}
