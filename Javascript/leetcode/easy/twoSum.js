const twoSum = (nums, target) => {
  for (let current = 0; current < nums.length; current++) {
    const complement = target - nums[current]

    for (let next = (current + 1); next < nums.length; next++) {
      const num = nums[next]

      const isTarget = num === complement
      if (isTarget) return [current, next]
    }
  }
return [-1, -1]
};