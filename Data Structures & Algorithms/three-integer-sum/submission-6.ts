class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a,b) => a - b)
        const res: number[][] = []

        for(let i = 0; i < nums.length; i += 1) {
            if(nums[i] > 0) break
            if(i > 0 && nums[i] === nums[i - 1]) continue

            let l = i + 1
            let r = nums.length - 1

            while(l < r) {
                const sum = nums[l] + nums[r] + nums[i]
                if(sum > 0) r -= 1
                else if(sum < 0) l += 1
                else {
                    res.push([nums[l], nums[r], nums[i]])
                    l += 1
                    r -= 1
                    
                    while(l < r && nums[l] === nums[l - 1]) l += 1
                }
            }
        }

        return res
    }
}
