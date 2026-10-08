class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // MAP HASH
        // [3,4,5,6]
        // [3 -> 0]
        
        const store = new Map<number, number>()

        for(let i = 0; i < nums.length; i += 1) {
            const needed = target - nums[i]

            if(store.has(needed)) return [store.get(needed), i]
            else store.set(nums[i], i)
        }

        return []
    }
}
