class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        // Map numbers, no need to check numbers that already passed
        // Set the number doing the sum of his left and his right + 1 ((itself))
        // Set his left, set his right with new amount
        // res = Max of res and numbers

        const count = new Map<number,number>()
        let res = 0

        for(const num of nums) {
            if(!count.has(num)) {
                count.set(num, (count.get(num - 1) ?? 0) + (count.get(num + 1) ?? 0) + 1)
                count.set(num - (count.get(num - 1) ?? 0), count.get(num))
                count.set(num + (count.get(num + 1) ?? 0), count.get(num))

                res = Math.max(res, count.get(num))
            }
        }
        return res
    }
}
