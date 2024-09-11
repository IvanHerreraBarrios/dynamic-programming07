//flatten

let uniquePaths = function(m, n) {
    return upWithMemo({}, m, n);
};

function upWithMemo(memo, m, n) {
  if (m === 1 || n==1) {
    return 1;
  }
  let path1 = memo[`${m-1}-${n}`] || upWithMemo(memo, m-1, n);
  let path2 = memo[`${m}-${n-1}`] || upWithMemo(memo, m, n-1);

  memo[`${m-1}-${n}`] = path1;
  memo[`${m}-${n-1}`] = path2;

  return path1 + path2;
}

/*
{
"3-2": 3,
"7-3": 28
}
*/