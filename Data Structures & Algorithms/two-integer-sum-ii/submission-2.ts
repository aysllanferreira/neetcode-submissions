class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let l = 0
        let r = numbers.length - 1

        while(r > l) {
            if(numbers[l] + numbers[r] > target) r -= 1
            else if(numbers[l] + numbers[r] < target) l += 1
            else return [l + 1, r + 1]
        }

        return [l + 1, r + 1]
    }
}
