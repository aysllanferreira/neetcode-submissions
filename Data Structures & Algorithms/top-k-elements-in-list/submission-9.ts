class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // Create a Bucket with ammount of numbers in the array
        // freq = [ [], [], [], [], [], [] ]
        // Count how many times each number appears
        // { 1: 3, 2: 4, 3: 5 }
        // Put each numer in your frequence in the Bucket
        // freq = [ [], [], [1], [2], [3], [] ]
        // Get them coming from end to start
        // When res array receives K amount, return it. 

        const count: Record<number, number> = {}
        const freq: number[][] = Array.from({ length: nums.length + 1 }, () => [])
        const res: number[] = []

        for(const num of nums) {
            count[num] = (count[num] || 0) + 1
        }

        for(const [num, c] of Object.entries(count)) {
            freq[c].push(+num)
        }

        for(let i = freq.length - 1; i >= 0 ; i -= 1) {
            for(const num of freq[i]) {
                res.push(num)

                if(res.length === k) return res
            }
        }

        return []
    }
}
