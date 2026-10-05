class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sortedNums = nums.sort((a,b) => a - b)
        const res: number[][] = []

        for(let i = 0; i < sortedNums.length - 2; i += 1){
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue
            let j = i + 1
            let k = sortedNums.length - 1

            while(k > j) {
                const target = 0
                const sumValues = sortedNums[i] + sortedNums[j] + sortedNums[k]

                if(sumValues > target) k -= 1
                else if(sumValues < target) j += 1
                else {
                    res.push([
                        sortedNums[i],
                        sortedNums[j],
                        sortedNums[k]
                    ])
                    j += 1
                    k -= 1
                    while(j < k && sortedNums[j] === sortedNums[j - 1]) j += 1
                    while(j < k && sortedNums[k] === sortedNums[k + 1]) k -= 1
                }
            }
        }

        return res
    }
}