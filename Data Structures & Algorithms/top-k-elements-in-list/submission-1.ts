class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const mapper = new Map<number, number>()

        for (const num of nums) {
            if(mapper.has(num)){
                mapper.set(num, mapper.get(num) + 1)
            } else {
                mapper.set(num, 1)
            }
        }

        const pairs = Array.from(mapper.entries())

        return pairs.sort((a, b) => b[1] - a[1]).slice(0,k).map(pair => pair[0])

    }
}
