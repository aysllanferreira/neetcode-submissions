class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const box = new Set<number>()

        for(let i = 0; i < nums.length; i++) {
            if(!box.has(nums[i])) box.add(nums[i])
            else return true
        }

        return false
    }
}
