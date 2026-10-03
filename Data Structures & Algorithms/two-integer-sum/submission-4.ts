class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // LOOP HASHMAP
        
        const count = new Map<number, number>()

        for (let i = 0; i < nums.length; i += 1) {
            const needed = target - nums[i]

            if(count.has(needed)) return [count.get(needed), i]
            else count.set(nums[i], i)
        }
    }
}
