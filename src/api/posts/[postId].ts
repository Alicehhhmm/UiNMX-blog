
// [postId].ts 这个写法代表这个路由可以动态匹配不同的值。 
// 例如 /api/posts/1 和 /api/posts/2 两个请求
// 都会交给 src/api/posts/[postId].ts 处理，但他们的 req.params 分别是 { postId: 1 } 和 { postId: 2 }。


