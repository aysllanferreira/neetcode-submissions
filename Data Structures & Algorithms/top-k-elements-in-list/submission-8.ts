class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const store = new Map<number, number>()

        for(const num of nums) {
            if(store.has(num)) store.set(num, (store.get(num) ?? 0) + 1)
            else store.set(num, 1)
        }

        const res = Array.from(store.entries())

        return res.sort((a, b) => b[1] - a[1]).slice(0, k).map(num => num[0])
    }
}
