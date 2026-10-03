class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const setNums = new Set<number>()

        for(const num of nums){
            setNums.add(num)
        }
        return nums.length - setNums.size !== 0 ? true : false
    }
}
