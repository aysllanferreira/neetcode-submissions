class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // Sort the array
        // If  current loop is > 0, break, because all other values will be positve, and impossible to be 0
        // If the current number is the same than the previous number, skip it, otherwise it will repeat triplets
        // Then, Apply the two sum

        nums.sort((a,b) => a - b)
        const res: number[][] = []

        for(let i = 0; i < nums.length; i += 1) {
            if(nums[i] > 0) break
            if(i > 0 && nums[i] === nums[i - 1]) continue

            let l = i + 1
            let r = nums.length - 1

            while(l < r) {
                const sumValues = nums[i] + nums[l] + nums[r]
                if(sumValues > 0) r -= 1
                else if(sumValues < 0) l += 1
                else {
                    res.push([nums[i], nums[l], nums[r]])
                    l += 1
                    r -= 1
                    
                    while(l < r && nums[l] === nums[l - 1]) l += 1
                }
            }
        }

        return res
    }
}
