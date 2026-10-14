class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // [ [], [2], [1], [], [], [], [], [3] ]
        // { 1: 3, 2: 2, 3: 7  }
        // [ 1, 3 ]

        const freq: number[][] = Array.from({ length: nums.length + 1 }, () => [])
        const count: Record<number, number> = {}
        const res: number[] = []

        for(const num of nums) {
            if(!count[num]) count[num] = 1
            else count[num] += 1
        }

        for(const [num, c] of Object.entries(count)) {
            freq[c].push(+num)
        }

        for(let i = freq.length - 1; i >= 0; i -= 1) {
            for(const num of freq[i]) {
                res.push(num)

                if(res.length === k) return res
            }
        }
        
        return res
    }
}
