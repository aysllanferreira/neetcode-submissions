class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        // Calculate area always
        // Save in the res the Max value between current res and current area
        // Move the pointer and at the end return res

        let res = 0
        let l = 0
        let r = heights.length - 1

        while(r > l) {
            const area = ( r - l) * Math.min(heights[l], heights[r])

            res = Math.max(res, area)

            if(heights[l] > heights[r]) r -= 1
            else l += 1
        }

        return res  
    }
}
