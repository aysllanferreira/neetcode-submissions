class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const store = new Set<number>()

        for (const num of nums) {
            if(store.has(num)) return true
            else store.add(num)
        }
        return false
    }
}
