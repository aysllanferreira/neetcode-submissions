class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const output = new Map<number, number>()

        for(let i: number = 0; i < nums.length; i++) {
            const needed: number = target - nums[i]

            if(output.has(needed)){
                return [output.get(needed), i] as number[]
            } else {
                output.set(nums[i], i)
            }
        }
    }
}
