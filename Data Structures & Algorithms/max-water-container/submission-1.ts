class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let i = 0
        let j = heights.length - 1
        let res = 0

        while (i < j) {
            const area = (j - i) * Math.min(heights[i], heights[j])

            if(area > res) res = area

            if(heights[i] >  heights[j]) j -= 1
            else i += 1
        }

        return res
    }
}
