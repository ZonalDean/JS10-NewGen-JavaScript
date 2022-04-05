const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

injectArraySum = (arr1, arr2) => {
    result = [5]
    result.push(...arr1, -6, -1, ...arr2)
    sum = result.reduce((sum,current) => sum + current,0)
    return sum
}

console.log(injectArraySum(nums1,nums2))