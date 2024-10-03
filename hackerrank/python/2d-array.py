def hourglassSum(arr):
    new_array = []
    for i in range(len(arr)):
        for j in range(len(arr[i])):
            new_array.append(arr[i][j:j+3])

    second_array = []
    
    for i in range(len(new_array)-13):
        if len(new_array[i]) == 3:
            temp = []
            temp.extend(new_array[i])
            temp.extend(new_array[i+12])
            temp.extend(new_array[i+6][1:2])
            second_array.append(sum(temp))
    return max(second_array)