class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const counts = new Map<number, number>()

        for(let i = 0; i < nums.length; i += 1) {
            const t = target - nums[i]

            if(counts.has(t)){
                return [counts.get(t)!, i]
            } else {
                counts.set(nums[i], i)
            }
        }
    }
}
