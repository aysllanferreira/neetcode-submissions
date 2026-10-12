class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const res = new Array(nums.length).fill(1)
        let postfix = 1

        for(let i = 1; i < nums.length; i += 1) {
            res[i] = nums[i - 1] * res[i - 1]
        }

        for(let i = res.length - 1; i >= 0; i -= 1) {
            res[i] *= postfix
            postfix *= nums[i]
        }

        return res
    }
}
