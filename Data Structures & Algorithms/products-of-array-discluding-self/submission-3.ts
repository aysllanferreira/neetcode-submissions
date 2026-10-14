class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // [1,2,4,6]
        // [48, 24, 12, 8]
        // Postfix: 24

        let postfix = 1
        const res: number[] = new Array(nums.length).fill(1)

        for(let i = 1; i < nums.length; i += 1) {
            res[i] = nums[i - 1] * res[i - 1]
        }

        for(let i = res.length - 2; i >= 0; i -= 1) {
            postfix *= nums[i + 1]
            res[i] *= postfix
        }

        return res
    }
}
