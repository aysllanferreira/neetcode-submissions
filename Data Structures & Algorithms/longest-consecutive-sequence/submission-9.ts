class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const count = new Map<number, number>()
        let res = 0

        for(const num of nums) {
            if(!count.has(num)) {
                count.set(num, 1 + (count.get(num - 1) ?? 0) + (count.get(num + 1) ?? 0) )
                count.set(num - (count.get(num - 1) ?? 0), count.get(num))
                count.set(num + (count.get(num + 1) ?? 0), count.get(num))

                res = Math.max(res, count.get(num))
            }
        }

        return res
    }
}
