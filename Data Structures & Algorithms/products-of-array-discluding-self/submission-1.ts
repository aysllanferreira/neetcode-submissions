class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length
        const res: number[] = new Array(n).fill(1)
        let postfix = 1

        for(let i = 1; i < n; i += 1){
            res[i] = res[i - 1] * nums[i - 1]
        }

        for(let i = n - 1; i >= 0; i -= 1) {
            res[i] *= postfix
            postfix *= nums[i]  
        }

        return res
    }
}
