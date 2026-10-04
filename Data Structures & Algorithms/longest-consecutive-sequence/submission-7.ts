class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        // Brute force solution
        let streak = 1
        const store = new Set(nums)

        if(Array.from(store.values()).length === 1) return 1
        if(nums.length === 0) return 0

        for(const num of store) {
            if(!store.has(num - 1)) {
                let goal = num + 1
                let loop = true
                let internalStreak = 1

                while(loop) {
                    if(store.has(goal)) {
                        internalStreak += 1
                        goal += 1

                        if(internalStreak >= streak) {                        
                            streak = internalStreak
                        }

                    } else {
                        loop = false
                    }
                }
            }
        }

        return streak
    }
}