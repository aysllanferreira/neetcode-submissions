class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const mapper = new Map<number, number>()

        for(const num of nums) {
            if(mapper.has(num)) mapper.set(num, (mapper.get(num) ?? 0) + 1)
            else mapper.set(num, 1)
        }

        return Array.from(mapper.entries()).sort((a, b) => b[1] - a[1]).slice(0, k).map(num => num[0])
    }
}
