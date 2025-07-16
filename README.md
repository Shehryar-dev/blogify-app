first of all pehly isko check kroo yee theek hai?
mein comment functionily ko add kr rao comment hoo rai hai bss show krne hai
export async function ShowFullBlog(req, res) {
  const blogId = req.params.id;
  const singleBlog = await Blog.findById(blogId).populate("createdBy").then((response)=>{
    return response;
  }).catch((err)=>{
    console.log('error:',err);
  });
  const blogs = await Blog.find({});
  const comment = await Comment.find({ blogId: blogId }).populate('createdBy');
  console.log(req.user)


  return res.render("showfullblog", {
    user:req.user,
    singleBlog,
    blogs,
    comment
  });
}

user agr login nhi hai tu bss comment dekh skta hai agr login hai tu blog pr comment bhi kr skta hai or agr 0 comment hai tu nechy joo line dii hai wooo show hoo or agr kis se ne comment kiya hai uski profile or name or uska comment show hona chaiye kiya comment kiya hai

<!-- Comment Section -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Comments</h2>
      <% if(locals.user){ %>
      <!-- Comment Form -->
      <form
        action="/blog/comment/<%= singleBlog._id %>"
        method="post"
        class="mb-6"
      >
        <textarea
          name="comment"
          rows="3"
          required
          placeholder="Write a comment..."
          class="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
        <button
          type="submit"
          class="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded font-semibold"
        >
          Post Comment
        </button>
      </form>
      <% } %>
      <!-- Comment List (dummy for now) -->
      <div class="space-y-4">
        <div class="bg-gray-800 p-4 rounded-lg">
          <p class="text-sm text-gray-300">
            No comments yet. Be the first to comment!
          </p>
        </div>
      </div>
    </section>
  </section>